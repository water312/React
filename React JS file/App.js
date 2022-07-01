import React, { useEffect, useState } from 'react';
import './App.css';
import datas from "./data/Cards"
import BusinessCard from "./components/BusinessCard"

export default function App() {

  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  function draw() {
    // 조건추가
    if (pickedCards.length > 2){
      const names = pickedCards.reduce((acc, cur) => {
        return acc = acc.concat(`${cur.name}, `)
      },"")
      return alert(`당첨자는 ${names} 입니다.`)
    }
    // 추첨하기 버튼을 누르면, 랜덤하게 하나의 명함을 고른다.
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx]

    // 중복제거
    setCards(cards.filter(c => c.phoneNumber !== randomItem.phoneNumber))
    // 당첨자(array)관리
    setPickedCards([...pickedCards, randomItem])
  }

  useEffect(() => {
    setCards(datas);
  }, []);

  const result = pickedCards.map((pickedCard) => 
  <BusinessCard info={pickedCard} key={pickedCard.phoneNumber} />)

  console.log(result)

  return <div>
    {cards.length > 0 && <button onClick={draw}>추첨하기</button> }
    {/* {pickedCards.length > 0 && <BusinessCard info={pickedCards[pickedCards.length - 1]} /> } */}
    { pickedCards.length > 0 && result}
    </div>
}
