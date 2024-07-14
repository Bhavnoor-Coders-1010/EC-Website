let array = ["Soap Box Schedule", "Penalties Imposed", "EDAD Schedule", "Call for Nominations", "CoC Enforced", "CoC for Propective Period", "Prospective Period"];
let info = {"Soap Box Schedule":["soapbox.png",'The GBM is allowed to question the candidates about their credentials, manifesto,etc.'], "Penalties Imposed":["penaltyimposed.png",'Penalties on some students has been imposed during the Prospective period of General Elections. Please find the list <a href="https://docs.google.com/spreadsheets/d/1SpBhT1VwjsUADpA31p6fmulUCvW4dqam79c2T3ZKqzI/edit?usp=sharing" target="_blank">here</a>.'], "EDAD Schedule":["EDAD.png", 'A panel including the current executives questions the respective candidates on their manifesto, mission and vision for the upcoming tenure. The candidates(if more than one) may question each other during the debate.'], "Call for Nominations":["nomination.png", 'With the start of GE24, nominations are called for the posts of executives and senators. The posts for which elections are being held are <a href="https://drive.google.com/file/d/1cetduCHUu7Wajg8-T0vFSnQyGEbE9Qp6/view?usp=drivesdk" target="_blank">here</a>. Please find the process <a href="https://docs.google.com/document/u/0/d/1P_32H7SsweD5SEcBMs00Gw5F1bQNKNBvW_wNaupE8rI/mobilebasic" target="_blank">here</a>'], "CoC Enforced":["cocenforced.png",'The EC announces the onstart of General Elections 2024. The CoC has been enforced. Please find the CoC <a href="https://drive.google.com/file/d/12EyU0gVeABNQchEZwdf2KQXliTnVJ4Je/view?usp=drivesdk" target="_blank">here</a>.'], "CoC for Propective Period":["cocprospective.png",'With the start of Prospective Period, the CoC for the Prospective Period has been enforced. Please find the CoC <a href="https://drive.google.com/file/d/1cHQR-kNYOoRuIFfFUkcuLtdTu6hVbWac/view?usp=sharing" target="_blank">here</a>.'], "Prospective Period":["prospectivecand.png",'The period of Prospective Candidature for executive posts initiated on 17th December. GBM can file nominations till 24th December.']};
let imageArray = ["soapbox.png", "penaltyimposed.png", "EDAD.png", "nomination.png", "cocenforced.png", "cocprospective.png", "prospectivecand.png"];
let annDiv = document.querySelector(".announcement");
// console.log(info["Penalties Imposed"][0])
function closeModal(name){
    document.querySelector(`#${name}`).classList.add("off");
    document.querySelector(`#${name} .modal`).classList.remove("on");
}
function CreateModal(name){
    let big = document.createElement("div");
    big.id = name.replaceAll(" ", "_");
    big.className = "modal-container off";
    let small = document.createElement("div");
    small.className = "modal";
    let image = document.createElement("div");
    image.className = "image";
    let img = document.createElement("img");
    img.src = info[name][0];
    image.append(img);
    small.append(image);
    let content = document.createElement("div");
    content.className = "content";
    let heading = document.createElement("h1");
    heading.innerText = name;
    content.append(heading);
    let desc = document.createElement("p");
    desc.innerHTML = info[name][1];
    content.append(desc);
    let close = document.createElement("button");
    close.innerText = "Close";
    close.addEventListener("click", closeModal.bind(null, name.replaceAll(" ", "_")))
    content.append(close);
    small.append(content);
    big.append(small);
    document.querySelector("body").append(big);
}
function displayModal(name){
    console.log(`${name.replaceAll(" ", "_")}`)
    let element = document.querySelector(`#${name.replaceAll(" ", "_")}`);
    element.classList.remove("off");
    document.querySelector(`#${name.replaceAll(" ", "_")} .modal`).classList.add("on");
}
for(elem of array){
    let btn = document.createElement("button");
    btn.innerText = elem;
    CreateModal(elem);
    btn.addEventListener("click", displayModal.bind(null, elem));
    annDiv.appendChild(btn);
}


let complaint = document.querySelector(".complaintPortal");
complaint.addEventListener("click", ()=>{
    document.querySelector(".complainForm").reset();
    document.querySelector(".formDiv").classList.remove("off");
    document.querySelector(".formDiv").classList.add("on");
})
let close = document.querySelector("#close");
close.addEventListener("click", ()=>{
    document.querySelector(".formDiv").classList.add("off");
    document.querySelector(".formDiv").classList.remove("on");
})
let submit = document.querySelector("form button");
submit.addEventListener("click", ()=>{
    // let elems = document.querySelectorAll("form input");
    // for(elem of elems){
    //     elem.value = "";
    // }
    // document.querySelector("form textarea").value = "";
    if(document.querySelector("form textarea").value != ""){
        let loading = document.createElement("div");
        loading.className = "load";
        let loadImg = document.createElement("img");
        loadImg.src = "load.png";
        loading.append(loadImg);
        document.querySelector("body").append(loading);
        document.querySelector(".formDiv").classList.add("off");
    }
    
})