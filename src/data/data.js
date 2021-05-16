const DATA = {
    homeappliance:{
      id: 1,
      title: 'لوازم خانگی',
      routeName: 'homeappliance',

      items: [
        {
          id: 1,
          name: 'لوازم خانگی برقی',
          linkUrl:'barghiservice',
          cat:'homeappliance',
          subcat:'barghi',
          childitems:[
           { 
            id:1,   
            childname:'تعمیر اتو',   
            imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%D9%81%D8%B1%D8%B4-%D8%B4%D9%88-min.png',
            price: 25,
            url:'stove',
            cat:'homeappliance',
            subcat:"barghi"
            },
            { 
            id:2,    
            childname:'تعمیر جارو برقی',   
            imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%D8%AC%D8%A7%D8%B1%D9%88-%D8%A8%D8%B1%D9%82%DB%8C-min.png',
            price: 25,
            url:'t',
            cat:'homeappliance',
            subcat:"barghi"
            },
            { 
            id:3,    
            childname:'تعمیر جارو شارژی',   
            imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%D8%AC%D8%A7%D8%B1%D9%88-%D8%B4%D8%A7%D8%B1%DA%98%DB%8C-min.png',
            price: 25,
            url:'ee',
            cat:'homeappliance',
            subcat:"barghi"
            },
            
          ],
      
        },
        {
            id: 2,
            name: 'لوازم آشپزخانه',
            linkUrl:'kitchen',
            cat:'homeappliance',
            subcat:"kitchen",
            childitems:[
             { 
              id:4,   
              childname:'تعمیر یخچال',   
              imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%DB%8C%D8%AE%DA%86%D8%A7%D9%84-min.png',
              price: 25,
              url:'y',
              cat:'homeappliance',
              subcat:"kitchen"
              },
              { 
              id:5,    
              childname:'تعمیر ماشین لباسشویی',   
              imageUrl: 'https://emdadkaran.com/wp-content/uploads/2021/03/6045cbc4ae20c-removebg-preview.png',
              price: 25,
              url:'u',
              cat:'homeappliance',
              subcat:"kitchen"
              },
              { 
              id:6,    
              childname:'تعمیر ماشین ظرفشویی',   
              imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D8%B8%D8%B1%D9%81%D8%B4%D9%88%DB%8C%DB%8C-min.png',
              price: 25,
               url:'i',
               cat:'homeappliance',
               subcat:"kitchen"
              },
              { 
                id:7,    
                childname:'تعمیر اجاق گاز',   
                imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%D8%A7%D8%AC%D8%A7%D9%82-%DA%AF%D8%A7%D8%B2-min.png',
                price: 25,
                url:'r',
                cat:'homeappliance',
                subcat:"kitchen"
                },
              
            ],
        
          },
        
      ]
    },




   facilitis: {
      id: 2,
      title: 'تاسیسات',
      routeName: 'facilitis',
      items: [
        {
          id: 8,
          name: 'سرمایشی و گرمایشی',
          cat:'facilitis',
          linkUrl:'garmaosarma',
          subcat:'garmayeshi',
          childitems:[
           { 
            id:1,   
            childname:'سرویس کولر آبی',   
            imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%DA%A9%D9%88%D9%84%D8%B1-%D8%A2%D8%A8%DB%8C-min.png',
            price: 25,
            url:'air',
            cat:'facilitis',
            subcat:'garmayeshi',
            },
            { 
            id:2,    
            childname:'سرویس کولر گازی',   
            imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%DA%A9%D9%88%D9%84%D8%B1-%DA%AF%D8%A7%D8%B2%DB%8C-min.png',
            price: 25,
            url:'koolergazi',
            cat:'facilitis',
            subcat:'garmayeshi',
            },
            { 
            id:3,    
            childname:'سرویس پکیج دیواری',   
            imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%D9%BE%DA%A9%DB%8C%D8%AC-%D8%AF%DB%8C%D9%88%D8%A7%D8%B1%DB%8C-min.png',
            price: 25,
            url:'packege',
            cat:'facilitis',
            subcat:'garmayeshi',
            },
            { 
                id:4,    
                childname:'سرویس آبگرمکن دیواری',   
                imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%D9%BE%DA%A9%DB%8C%D8%AC-%D8%AF%DB%8C%D9%88%D8%A7%D8%B1%DB%8C-min.png',
                price: 25,
                url:'abgarmkon',
                cat:'facilitis',
                subcat:'garmayeshi',
                },
            
          ],
      
        },
        {
            id: 1,
            name: 'برق و الکترونیک',
            cat:'facilitis',
            linkUrl:'electrinic',
            subcat:'electrinic',
            childitems:[
             { 
              id:1,   
              childname:'برق ساختمان',   
              imageUrl: 'https://emdadkaran.com/wp-content/uploads/thumpnailpic/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1%D8%A7%D8%AA-%D8%A8%D8%B1%D9%82%20-%D8%B3%D8%A7%D8%AE%D8%AA%D9%85%D8%A7%D9%86-min.png',
              price: 25,
              url:'barghsakhteman',
              cat:'facilitis',
              subcat:'electrinic',
              },
              { 
              id:2,    
              childname:'تعمیر کرکره برقی',   
              imageUrl: 'https://emdadkaran.com/wp-content/uploads/2020/08/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%DA%A9%D8%B1%DA%A9%D8%B1%D9%87-%D8%A8%D8%B1%D9%82%DB%8C.jpg',
              price: 25,
              url:'kerkereh',
              cat:'facilitis',
              subcat:'electrinic',
              },
              { 
              id:3,    
              childname:'تعمیر درب اتوماتیک',   
              imageUrl: 'https://emdadkaran.com/wp-content/uploads/2020/08/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%DA%A9%D8%B1%DA%A9%D8%B1%D9%87-%D8%A8%D8%B1%D9%82%DB%8C.jpg',
              price: 25,
              url:'darbauto',
              cat:'facilitis',
              subcat:'electrinic',
              },
              { 
                id:4,    
                childname:'تعمیر دوربین مدار بسته',   
                imageUrl: 'https://emdadkaran.com/wp-content/uploads/2020/08/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%DA%A9%D8%B1%DA%A9%D8%B1%D9%87-%D8%A8%D8%B1%D9%82%DB%8C.jpg',
                price: 25,
                url:'cctv',
                cat:'facilitis',
                subcat:'electrinic',
                },
              
            ],
        
          },
        
      ]
    },



   
    
  };
  
  export default DATA;
  