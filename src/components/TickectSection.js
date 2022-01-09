import ticket_ from "../images/ticket.png";
import TranscHistory from "./TransactionHistory";
import { useState } from "react";

const TicketSection = (props) => {
    const [randomVal, setRandomVal] = useState("Get a #Ticket");
    const [gettingEffect, setGettingEffect] = useState(" ");
    const [ticketBTN, setTicketBTN] = useState(" ");
    const [getTicketVal, setGetTicketVal] = useState("Get Ticket")
    const [ticketImg, setTicketImg] = useState(" ")
    const [mlr, setMlr] = useState("ml_") 

    const getTicket = ()=>{
        let counter = 0;

        function updater(){
            setRandomVal(Math.random(1076).toString().slice(2,10));
            setGettingEffect("Getting Ticket...");
            setTicketBTN("get-ticket");
            setMlr("")
            counter++
    
            if (counter === 40){
                clearInterval(refresh)
                setRandomVal(Math.random(1076).toString().slice(2,10));
                setTicketImg(ticket_);
                setTicketBTN(" ");
                setGetTicketVal("Get Another Ticket")
                setGettingEffect("")
                
            }
        }
    
        let refresh = setInterval(updater, 50);
    }

    return(
        <>
            <div className="ticket container">
                <p className="ticket-type">{props.title} ${props.amount}</p>
                <p className="randomizer"><img src={ticketImg} alt="" className={`ticket-img ${ticketBTN}`}></img> <span className={mlr}>{randomVal}</span></p>
                <a href="#" className={"btn "+ ticketBTN} onClick={getTicket}>{getTicketVal}</a>
                <p className="getting">{gettingEffect}</p>
            </div>
            <TranscHistory address = "abcdefgxfshdidyugah1627dhdjk" type = "Whale" ticket={43243543}/>
        </>
    )
}

export default TicketSection;