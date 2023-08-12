const contacts = [
  {
    id: 1,
    name: "To-Do list",
    goto: "/todo",
    imageURL:
      "data:image/png;base64,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"
  },
  {
    id: 2,
    name: "Calculator",
    goto: "/calci",
    imageURL: "https://cdn-icons-png.flaticon.com/512/262/262816.png"
  },
  

  
  
  {
    id: 3,
    name: "Celsius <-> Kelvin",
    goto: "/degree",
    imageURL:
      "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/5ff71d35ad857b19a6aebb4d_Celsius-to-Fahrenheit-Conversion.png"
  },
  {
    id: 4,
    name: "Canvas",
    goto: "/draw",
    imageURL:
      "https://p7.hiclipart.com/preview/623/975/807/pencil-ico-drawing-icon-cartoon-pencil.jpg"
  },
 
];

export default contacts;
