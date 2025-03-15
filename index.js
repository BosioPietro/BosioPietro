const ASCII_ART = `
::::::::::::::::
::::::::::::::::::  
::++::       :::++: 
::++::        ::++:: 
++::++        ++::++ 
++::++       +++::+: 
++#+++++::++++#+++:  
++##++++::++++##+++  
++##++       +++##++ 
++##++        ++##++ 
##++##        ##++## 
##++##       ###++## 
###################
##################
`

const pre = document.querySelector("pre");
const lines = ASCII_ART.split("\n").filter(Boolean)
const percentage = 100 / (lines.length - 1);

for(const [i, line] of Object.entries(lines)){
    for(const letter of line){
        const span = document.createElement("span");
        span.innerHTML = letter;
        pre.appendChild(span)
        span.style.setProperty("--gradient-accent", `${percentage * i}%`)
    }
    pre.innerHTML += "\n";
}
