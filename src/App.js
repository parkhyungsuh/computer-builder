import React from 'react';
import Navigation from './Components/Navigation';
import ItemList from './Components/ItemList';
import ItemDetail from './Components/ItemDetail';
import SelectedItem from './Components/SelectedItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'CPU',
      itemDetailOpen:false,
      selectedItemOpen:false
    }
  }

  data2 = [
    {
      category:"CPU",
      name:"3600",
      made:"AMD",
      price:"209,000",
      madeDay: "2019 3분기",
      thumbnail: "http://img.danawa.com/prod_img/500000/973/459/img/8459973_1.jpg",
      detailImg:"http://iws.danawa.com/prod_img/500000/973/459/desc/prod_8459973/add_1/20190703143848851_SITY0BG2.jpg",
      spec:{
        core:{
          ko:"코어",
          value:6,
          unit:"코어"
        },
        thread:{
          ko:"스레드",
          value:12,
          unit:"스레드"
        },
        baseclock:{
          ko:"베이스클럭",
          value:3.6,
          unit:"GHz"
        },
        maxClock:{
          ko:"최대클럭",
          value:4.2,
          unit:"GHz"
        },
        TDP:{
          ko:"설계전력",
          value:65,
          unit:"W"
        },
        l2Cash:{
          ko:"L2 캐쉬",
          value:3,
          unit:"MB"
        },
        l3Cash:{
          ko:"L3 캐쉬",
          value:32,
          unit:"MB"
        },
        PCIe: {
          ko:"PCIe 버전",
          value:"PCIe4.0",
        },
        maxPCieLane:{
          ko:"최대 PCIe 레인수",
          value:16,
          unit:"레인"
        },
        GPU:{
          ko:"내장그래픽",
          value:false,
          name:null
        },
        cooler:{
          ko:"쿨러",
          value:true,
          name:"Wraith Stealth"
        },
        madeLength:{
          ko:"제조공정",
          value:7,
          unit:"nm"
        },
        generation:{
          ko:"세대 구분",
          value:"3세대(Zen 2)"
        },
        codeName:{
          ko:"CPU 종류",
          value:"라이젠5",
          name:"마티스"
        }
      },
      need:{
        ram:{
          ko:"메모리규격",
          value:"DDR4",
        },
        ramSpeed:{
          ko:"메모리 버스",
          value:3200,
          unit:"MHz"
        },
        soket:{
          ko:"소켓",
          value:"AM4"
        }
      }
    },
    {
      category:"CPU",
      name:"10700K",
      made:"인텔",
      price:"470,000",
      madeDay: "2020 5월",
      thumbnail:"http://img.danawa.com/prod_img/500000/485/308/img/11308485_1.jpg",
      detailImg:"http://iws.danawa.com/prod_img/500000/485/308/desc/prod_11308485/add_1/20200518164924625_QYK6NS9L.jpg",
      spec:{
        core:{
          ko:"코어",
          value:8,
          unit:"코어"
        },
        thread:{
          ko:"스레드",
          value:16,
          unit:"스레드"
        },
        baseclock:{
          ko:"베이스클럭",
          value:3.8,
          unit:"GHz"
        },
        maxClock:{
          ko:"최대클럭",
          value:5.1,
          unit:"GHz"
        },
        TDP:{
          ko:"설계전력",
          value:65,
          unit:"W"
        },
        l2Cash:{
          ko:"L2 캐쉬",
          value:null,
          unit:"MB"
        },
        l3Cash:{
          ko:"L3 캐쉬",
          value:16,
          unit:"MB"
        },
        PCie: {
          ko:"PCIe 버전",
          value:"PCie3.0",
        },
        maxPCieLane:{
          ko:"최대 PCIe 레인수",
          value:16,
          unit:"레인"
        },
        GPU:{
          ko:"내장그래픽",
          value:true,
          name:"인텔 UHD 630"
        },
        cooler:{
          ko:"쿨러",
          value:false,
          name:null
        },
        madeLength:{
          ko:"제조공정",
          value:14,
          unit:"nm"
        },
        generation:{
          ko:"세대 구분",
          value:"10세대"
        },
        codeName:{
          ko:"CPU 종류",
          value:"코어i7",
          name:"코멧레이크S"
        }
      },
      need:{
        ram:{
          ko:"메모리규격",
          value:"DDR4",
        },
        ramSpeed:{
          ko:"메모리 버스",
          value:2933,
          unit:"MHz"
        },
        soket:{
          ko:"소켓",
          value:"소켓1200"
        }
      }
    },
  ];

  handleItemDetail() {
    this.setState(!this.state.itemDetailOpen);
  }

  

  render() {
    return (
      <>
        <Navigation 
        category={this.state.category} 
        onChangeCategory={(cat) => this.setState({ category:cat })}
        />
        <ItemList handleItemDetail category={this.state.category} />
        {this.state.itemDetailOpen && <ItemDetail /> }
        {this.state.selectedItemOpen && <SelectedItem />}
      </>
    )
  }
}


export default App;
