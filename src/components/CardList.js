//自動把各機器人特徵以迴圈的方式放到各卡片中，這樣就不用在undex.js的地方逐一放入
import React from 'react';
import Card from './Card'


const CardList = ( {robot} ) => { //pure components
    return (
        <div>
            {
                robot.map((user,i) => {
                return (
                    <Card 
                    key={i}
                    id={robot[i].id} 
                    name={robot[i].name} 
                    email={robot[i].email}
                    />
                    );
                })
            }
        </div>    
    );
}

export default CardList;