import { useContext, useEffect, useState } from "react";
import React from "react";
import { View, Text, TouchableOpacity, TextInput, Button, Image, FlatList, ScrollView } from "react-native";
import { useTheme } from "../../Contexts/Themes";

import night from '../../../assets/night.jpg';
import day from '../../../assets/day.jpg';
import sunset from '../../../assets/sunset.jpg';

export default function HomeScreen({ navigation }) {
  const { theme, isDark, toggleTheme } = useTheme();

  const mockedBudget = {
    expectedIncome: 5000.00,
    expectedSaves: 1200.00,
    foodBudget: 300.00,
  }

  const mockedData = [
    {
      type: 'expense',
      gender: 'food',
      amount: 10.00,
      details: 'A cheeseBurguer for lunch (I was in a hurry)'
    },
    {
      type: 'expense',
      gender: 'taxi',
      amount: 12.50,
      details: 'It was raining and I had to go to college'
    },
    {
      type: 'income',
      gender: 'outside job',
      amount: 120.00,
      details: "I worked one night in the Leo's restaurant"
    },
    {
      type: 'income',
      gender: 'salary',
      amount: 4000.00,
      details: "Normal salary"
    },
    {
      type: 'save',
      gender: 'Investment',
      amount: 500.00,
      details: "Allocating into passive"
    },
    {
      type: 'expense',
      gender: 'College',
      amount: 2500.00,
      details: "Mensality"
    },
    {
      type: 'expense',
      gender: 'Car Mensality',
      amount: 1200.00,
      details: "Car Mensality"
    },
    {
      type: 'expense',
      gender: 'Gym',
      amount: 100.00,
      details: "Gym Mensality"
    },
  ]

  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [saves, setSaves] = useState([]);

  const [incAm, setIncAm] = useState(0);
  const [expAm, setExpAm] = useState(0);
  const [savAm, setSavAm] = useState(0);

  function organizeData(data) {
    let expenses = [];
    let incomes = [];
    let saves = [];

    let iCount = 0;
    let eCount = 0;
    let sCount = 0;
    data.map((item) => {
      if (item.type === 'income') {
        incomes.push(item)
        iCount += Number(item.amount)
      } else if (item.type === 'expense') {
        expenses.push(item)
        eCount += Number(item.amount)
      } else if (item.type === 'save') {
        saves.push(item)
        sCount += Number(item.amount)
      } else {
        throw new Error('O tipo do dado é inválido')
      }
    })

    setExpenses(expenses);
    setIncomes(incomes);
    setSaves(saves);

    setIncAm(iCount);
    setExpAm(eCount);
    setSavAm(sCount);

  }

  useEffect(() => {
    organizeData(mockedData)
  }, [])

  return <>

    <ScrollView>

      <View style={theme.container}>

        <View>
          <Text style={theme.title}>ExpDayly</Text>

          <Text>Olá, Vinícius</Text>

        </View>

        <View style={[theme.card, { marginTop: 30 }]}>
          <Text style={theme.title}>Seus relatórios</Text>

          <Text>Total of incomes {incAm}</Text>

          <Text>Total of expenses {expAm}</Text>

          <View>
            <Text style={[theme.title, { marginTop: 20, }]}>Porcentage of flow</Text>

            <View style={{ display: 'flex', flexDirection: 'column', gap: 10, marginVertical: 20 }}>
              <View style={{ display: "flex", justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#87c44e', width: (incAm / (incAm + expAm)) * 300, height: 30 }}>
                <Text style={theme.graphicText}>Incomes</Text>
                <Text style={theme.graphicText}>{incAm.toFixed(2)}</Text>
              </View>

              <View style={{ display: "flex", justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#c4874e', width: (expAm / (incAm + expAm)) * 300, height: 30 }}>
                <Text style={theme.graphicText}>Expenses</Text>
                <Text style={theme.graphicText}>{expAm.toFixed(2)}</Text>
              </View>
            </View>

          </View>

          <View>
            <Text style={[theme.title, { marginTop: 20, }]}>In your budget</Text>

            <View style={{ display: 'flex', flexDirection: 'column', gap: 10, marginVertical: 20 }}>
              <View>
                <View style={{ display: "flex", justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#62992e', width: '100%', height: 30, position: 'absolute' }}>
                  <Text style={theme.graphicText}>{mockedBudget.expectedIncome.toFixed(2)}</Text>
                </View>
                <View style={{ display: "flex", justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#87c44e', width: incAm / mockedBudget.expectedIncome * 300, height: 30 }}>
                  <Text style={theme.graphicText}>{incAm.toFixed(2)}</Text>
                </View>
              </View>

              <View>

                <View style={{ display: "flex", justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'rgb(199, 148, 101)', width: '100%', height: 30, position: 'absolute' }}>
                  <Text style={theme.graphicText}>Expected Saves</Text>
                  <Text style={theme.graphicText}>{mockedBudget.expectedSaves.toFixed(2)}</Text>
                </View>

                <View style={{ display: "flex", justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#c4874e', width: savAm / mockedBudget.expectedSaves * 300, height: 30 }}>
                  <Text style={theme.graphicText}>Saves</Text>
                  <Text style={theme.graphicText}>{savAm.toFixed(2)}</Text>
                </View>
              </View>


            </View>

            <Text style={theme.title}>By gender</Text>

            <Text>Food</Text>

            <View>

              <View style={{ display: "flex", justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'rgb(199, 148, 101)', width: '100%', height: 30, position: 'absolute' }}>
                <Text style={theme.graphicText}>Expected expenses</Text>
                <Text style={theme.graphicText}>{mockedBudget.foodBudget.toFixed(2)}</Text>
              </View>

              <View style={{ display: "flex", justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#c4874e', width: savAm / mockedBudget.expectedSaves * 300, height: 30 }}>
                <Text style={theme.graphicText}>Saves</Text>
                <Text style={theme.graphicText}>{savAm.toFixed(2)}</Text>
              </View>
            </View>

          </View>

        </View>

      </View>
    </ScrollView>

  </>

}