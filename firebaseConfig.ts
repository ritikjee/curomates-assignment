// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCCvVRRoACRKzTvM33XMCU4tyEefMo5r78",
  authDomain: "ornate-justice-418317.firebaseapp.com",
  databaseURL: "https://ornate-justice-418317-default-rtdb.firebaseio.com",
  projectId: "ornate-justice-418317",
  storageBucket: "ornate-justice-418317.appspot.com",
  messagingSenderId: "111775540124",
  appId: "1:111775540124:web:4f1c48f24e03bdc4e59e59",
  measurementId: "G-YC41NEYJYH",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
