export default function ProductGrid() {
  const products = [
    {
      id: 1,
      
      image: "/project/images.png",
      description: "Personal Port folio",
      'GitHub Repository':"https://github.com/Kulsoomarif/portfolio",
    },
    {
      id: 2,
      image:"/project/download (4).jfif"
      ,
      description: "Hackathon",
      'GitHub Repository':"https://github.com/Kulsoomarif/hackathon-projects",

    },
    {
      id: 3,
      image: "/project/download (2).jfif",
      description: "Quiz game",
      'GitHub Repository':"https://github.com/Kulsoomarif/Quiz_system",

    },
    {
      id: 4,
      image:  "/project/download (3).jfif" ,
      description: "Adventure game",
      'GitHub Repository':"https://github.com/Kulsoomarif/Adventure-game",

    },
    {
      id: 5,
      image: "/project/download.jfif" ,
      description: "Currency converter",
      'GitHub Repository':"https://github.com/Kulsoomarif/currency-convertor",

    },
    {
      id: 6,  
      image: "/project/download (1).jfif",
      description: "Atm Machine Project",
      'GitHub Repository':"https://github.com/Kulsoomarif/Atm-Machine",


    },

    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-green-700 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={product.image}
            alt={product.description}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="mt-4">                       
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
  