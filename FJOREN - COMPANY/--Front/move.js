/* ==================================================
   MOVE.JS
================================================== */

const grupo = document.getElementById("move-grid");

if(grupo){

  gsap.set(grupo,{
    svgOrigin:"25 25",
    rotate:45,
    scale:1.4
  });

  for(let x = 0; x < 50; x++){
    for(let y = 0; y < 50; y++){

      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );

      grupo.appendChild(rect);

      gsap.set(rect,{
        x:x + 0.1,
        y:y + 0.1,
        transformOrigin:"0.5 -1",
        rotate:-45,
        attr:{
          width:1,
          height:0.5,
          ry:0.4,
          fill:"#111",
          stroke:"rgba(255,255,255,0.06)",
          "stroke-width":0.18
        }
      });

    }
  }

  const tl = gsap.to("#move-grid rect",{
    duration:2.5,
    ease:"expo.inOut",
    attr:{
      height:0.5,
      width:0.5,
      ry:0.2,
      fill:"#444",
      "stroke-width":0
    },
    rotate:90,
    stagger:{
      amount:10,
      from:"center",
      grid:[50,50],
      repeat:-1,
      yoyo:true,
      ease:"sine.inOut"
    }
  });

  tl.play(99);

}