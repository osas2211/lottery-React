import ticket_ from "../images/ticket.png";
import TranscHistory from "./TransactionHistory";

const TicketSection = (props) => {
    const getTicket = ()=>{
        const randomizer = document.querySelector(".randomizer");
        const ticketBTN = document.querySelector(".get-ticket");
        const getting = document.querySelector(".getting");
        let counter = 0;
        
        
        function updater(){
            randomizer.innerHTML = `<span>${Math.random(1076).toString().slice(2,10)}</span>`;
            getting.innerHTML = "Getting Ticket...";
            ticketBTN.style.display = "none";
            counter++
    
            if (counter === 40){
                clearInterval(refresh)
                randomizer.innerHTML = ` <img src="${ticket_}" alt="" class="ticket-img"> <span>${Math.random(1076).toString().slice(2,10)}</span>`;
                ticketBTN.style.display = "block";
                ticketBTN.innerHTML = "Get Another Ticket";
                getting.innerHTML = "";
            }
        }
    
        let refresh = setInterval(updater, 50);
    }

    return(
        <>
            <div className="ticket container">
                <p className="ticket-type">{props.title} ${props.amount}</p>
                <p className="randomizer"> <span>Get a #Ticket ID</span></p>
                <a href="#" className="btn get-ticket" onClick={getTicket}>Get Ticket</a>
                <p className="getting"></p>
            </div>
            <TranscHistory address = "abcdefgxfshdidyugah1627dhdjk" type = "Whale" ticket={43243543}/>
        </>
    )
}

export default TicketSection;