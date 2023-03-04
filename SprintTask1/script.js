let l = 0;
let r = 3;
const news = ["./Images/napoli.jpg", "./Images/SW.jpg", "./Images/MU.jpg", "./Images/B.jpg", "./Images/A.jpg", "./Images/D.jpg"];
const h_news = ["Napoli", "Shane Warne", "Manchester United:", "Ian Roberts:", "Foden", "Bahrain Grand Prix"];
const p_news = ["Napoli are aiming to become Italian champions for the third time with their last success coming in 1990.", "When Shane Warne in 1999, for his first taste of English domestic cricket, it was the biggest signing in the club's history.", "Nicky Butt says club have overtaken Liverpool on pitch under Erik ten Hag.Butt knew Rashford was destined for stardom", "The double life and singular purpose of a rugby league legend.It was as if Mick Potter had disappeared.", "Phil Foden's superb solo goal helped Manchester City see off Newcastle and ensured the defending champions kept up the pressure on Premier League leaders Arsenal.", "New Williams Formula 1 boss James Vowles says the task of leading the team back to the front is even tougher than he expected it to be."];
const l_news = ["https://www.bbc.com/sport/football/64844637", "https://www.bbc.com/sport/cricket/64812621", "https://www.bbc.com/sport/football/64824971", "https://www.bbc.co.uk/sounds/play/p0f6nndh", "https://www.bbc.com/sport/football/64768044", "https://www.bbc.com/sport/formula1/64848796"];
if(l === 0) document.getElementById("left").style.display = "none";
function clicked(x) {
    let k = 1;
    if(x < 0) {
        for(let i = l - 1; i <= r - 1; i++) {
            document.getElementById("e" + k).src = news[i];
            let a2 = document.getElementById("h" + k);
            let a3 = document.getElementById("p" + k);
            let a4 = document.getElementById("l" + k);
            a2.innerHTML = h_news[i];
            a3.innerHTML = p_news[i];
            a4.href = l_news[i];
            k++;
        }
        l--;
        r--;
    }else {
        for(let i = l + 1; i <= r + 1; i++) {
            document.getElementById("e" + k).src = news[i];
            let a2 = document.getElementById("h" + k);
            let a3 = document.getElementById("p" + k);
            let a4 = document.getElementById("l" + k);
            a2.innerHTML = h_news[i];
            a3.innerHTML = p_news[i];
            a4.href = l_news[i];
            k++;
        }
        l++;
        r++;
    }

    if(l == 0) {
        document.getElementById("left").style.display = "none";
    }else {
        document.getElementById("left").style.display = "block";
    }

    if(r == (news.length - 1)) {
        document.getElementById("right").style.display = "none";
    }else {
        document.getElementById("right").style.display = "block";
    }
}