import React, { createContext, useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";
import RNImmediatePhoneCall from "react-native-immediate-phone-call";
import { createNumberTable } from "../database/queries";
import { createNumber } from "../components/Constant";

const db = SQLite.openDatabase("numbersDB.db");

export const NumberContext = createContext();

export const NumberContextProvider = ({ children }) => {
  const [numbersList, setNumbersList] = useState([]);
  const [generatedNumbers, setGeneratedNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    createTables();
    getNumbersList();
  }, []);

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        createNumberTable,
        [],
        (sqlTxn, res) => {
          console.log("number table created successfuly");
        },
        (error) => {
          console.log(
            "an error occured when creating the table" + error.message
          );
        }
      );
    });
  };

  const getNumbersList = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM numbers ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("numbers res ", res.rows._array);
          setNumbersList(res.rows._array);
        },
        (error) => {
          /* setIsError(error.message);
          setIsLoading(false); */
          console.log("an error occured");
        }
      );
    });
  };

  //on retourne le numéro généré en s'assurant qu'il n'existe pas déjà dans la bd
  const getNumber = () => {
    let result, verif;
    do {
      result = createNumber();
      verif = numbersList.find((elt) => elt.number === result);
    } while (verif);
    return result;
  };

  //fonction qui va se charger de composer les numéros
  const dialNumber = (numbersList) => {
    RNImmediatePhoneCall.immediatePhoneCall(`*139*${numbersList[0]}#`);
    if (numbersList.length > 1) {
      for (let i = 1; i < numbersList.length; i++) {
        setTimeout(function timer() {
          RNImmediatePhoneCall.immediatePhoneCall(`*139*${numbersList[i]}#`);
        }, i * 6000);
      }
    }
  };

  const loop = () => {
    setTimeout(() => {
      console.log(num[i]);
      i++;
      if (i <= num.length - 1) {
        loop();
      }
    }, 3000);
  };

  const generateNumber = (quantity) => {
    let temp = [];
    setIsLoading(true);
    setIsError(null);
    for (let i = 1; i <= quantity; i++) {
      const num = getNumber();
      temp.push(num);
      db.transaction((txn) => {
        txn.executeSql(
          `INSERT INTO numbers (number) VALUES(?)`,
          [num],
          (sqlTxn, res) => {
            getNumbersList();
          },
          (error) => {
            console.log(
              "an error occured while inserting in the numbers table" +
                error.message
            );
            setIsError("Il y'a une erreur");
          }
        );
      });
      if (isError) {
        break;
      }
    }
    setGeneratedNumbers(temp);
    setIsLoading(false);
    dialNumber(temp);
  };

  return (
    <NumberContext.Provider
      value={{
        numbersList,
        isLoading,
        isError,
        generatedNumbers,
        generateNumber,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};
