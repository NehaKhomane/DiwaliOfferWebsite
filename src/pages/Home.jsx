import { useState } from 'react';
import './Homes.css';
export default function Home(){
const[isAddRecord,setIsAddRecord]=useState(false)
const[isViewRecord,setIsViewRecord]=useState(false)
const[isUpdateRecord,setIsUpdateRecord]=useState(false)
const[isDeleteRecord,setIsDeleteRecord]=useState(false)
const addRecordClick=()=>{
    setIsViewRecord(false)
    setIsDeleteRecord(false)
    setIsUpdateRecord(false)
    setIsAddRecord(true)
}
const viewRecordClick=()=>{
    setIsViewRecord(true)
    setIsDeleteRecord(false)
    setIsUpdateRecord(false)
    setIsAddRecord(false)
}
const updateRecordClick=()=>{
    setIsViewRecord(false)
    setIsDeleteRecord(false)
    setIsUpdateRecord(true)
    setIsAddRecord(false)
}
const deleteRecordClick=()=>{
    setIsViewRecord(false)
    setIsDeleteRecord(true)
    setIsUpdateRecord(false)
    setIsAddRecord(false)
}

    return(
        <>
        <div className='button-container'>
            <button onClick={addRecordClick}
            className={isAddRecord ? 'active': ''}>Lamp</button>
             <button onClick={viewRecordClick}
            className={isViewRecord ? 'active': ''}>crackers</button>
             <button onClick={updateRecordClick}
            className={isUpdateRecord ? 'active': ''}>Sweets</button>
             <button onClick={addRecordClick}
            className={isDeleteRecord ? 'active': ''}>Lights</button>
        </div>
        {
            isAddRecord && <AddRecordComponent/>
        }
        {
            isViewRecord && <ViewRecordComponent/>
        }
        {
            isUpdateRecord && <UpdateRecordComponent/>
        }
        {
            isDeleteRecord && <DeleteRecordComponent/>
        }
        </>
        
    )
    function AddRecordComponent(){
        return(
            <>
            <div className='add-record-container'>
                <div className='add'>
                    
                </div>
                <div className='remove'>
                    <p>Diyas are symbolically lit during prayers, rituals, and ceremonies; they are permanent fixtures in homes and temples. The warm, bright glow emitted from a diya is considered auspicious, regarded to represent enlightenment, prosperity, knowledge and wisdom. Diyas represent the triumph of light over dark, good over evil with the most notable example of this being on the day of Diwali. Diwali is celebrated every year to celebrate the triumph of good over evil as told in the Hindu epic, the Ramayana. Diwali marks the day Rama, Sita, and Lakshmana returned home to Ayodhya after 14 years in exile, after the defeat of Ravana. According to tradition, to welcome Rama, Sita, and Lakshmana home, the citizens of Ayodhya are said to have lit up the streets with diyas. 
                        They are regarded to be associated with Lakshmi in Hindu iconography and worship</p>
                </div>
            </div>
            </>
        )
    }
    function ViewRecordComponent(){
        return(
            <>
            <div className='view-record-container'>
                <div className='view'>

                </div>
                <div className='removeview'><p>
                Diwali fireworks are a family event in many parts of India People light up fireworks near their homes and in streets. Additionally, cities and communities have community fireworks.A firecracker cracker, noise maker, banger, is a small explosive device primarily designed to produce a large amount of noise, especially in the form of a loud bang, usually for celebration or entertainment. They have fuses, and are wrapped in a heavy paper casing to contain the explosive compound.People light up fireworks near their homes and in streets. Additionally, cities and communities have community fireworks. Firecrackers, along with fireworks, originated in China. They are easily available in India and are used to mark a celebratory event. Anyone 18 and over can buy them without a license if allowed by the local laws. </p></div>
            </div>
            </>
        )
    }
    function UpdateRecordComponent(){
        return(
            <>
            <div className='update-record-container'>
                <div className=' update'>

                </div>
                <div className='removeupdate'>
                    <p>Every celebration needs a touch of sweetness and talking about Diwali, it just can’t be commemorated without sweets! From making beautiful rangolis to decorating the whole house with diyas, Diwali brings so much happiness to everyone’s life! Generally, people who live far from their families visit their hometowns during this festival and you must agree to this fact that the joy of homecoming doubles when someone offers you a whole pack of sweets!
Sweets can also be referred to as a ‘happy food’ Can you even imagine Diwali without gujiyas? No, right?! You can ease your efforts by just buying a gujiya maker which is available in every kitchen tools store. We are sure that this crispy golden delicacy will woo your taste buds!
3.as they swiftly lighten up the mood and make you feel better.
</p>
                </div>
            </div>
            </>
        )
    }
    function DeleteRecordComponent(){
        return(
            <>
            <div className='delete-record-container'></div>
            </>
        )
    }
}