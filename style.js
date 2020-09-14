const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(211, 209, 209)
}
.banner-bar {
    background-color: rgba(56, 59, 233, 0.925);
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    border-style: double;
    border-color: black;
    border-radius: 50px;
}
// css created for all text
h1 {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 10vw;
    text-align: center;
}
p {
    font-family: 'Noto Sans JP', sans-serif;
    position: relative;
    left: 10px;
    justify-content: center;
    align-items: center;

}
h2 {
    font-family: 'Noto Sans JP', sans-serif;
    position: relative;
    font-size: 17px;
    left: 12px;
    justify-content: center;
    align-items: center;
}

.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;

}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: rgb(165, 165, 165);
    width: 246px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 2px solid rgb(0, 0, 0);
    box-shadow: 2px 5px 5px black;

}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: rgba(233, 233, 233, 0.61);
    box-shadow: 2px 5px 5px black;
    border: 2px solid rgb(0, 0, 0);
}
`

module.exports = style;