import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, RootTagContext } from 'react-native';
import { FlatList } from "react-native-web";
export default function screen1() {
    
    var data4a=[
        {productName:'Cá nấu lẩu, nấu mì mini...',img:require('../img/ca_nau_lau.png'), shopName:'Devang'},
        {productName:'1KG KHÔ GÀ BƠ TỎI...',img:require('../img/ga_bo_toi.png'), shopName:'LTD Food'},
        {productName:'Xe cần cẩu đa năng',img:require('../img/xa_can_cau.png'), shopName:'Thế giới đồ chơi'},
        {productName:'Đồ chơi dạng mô hình',img:require('../img/do_choi_dang_mo_hinh.png'), shopName:'Thế giới đồ chơi'},
        {productName:'Lãnh dạo giản đơn',img:require('../img/lanh_dao_gian_don.png'), shopName:'Minh Long Book'},
        {productName:'Hiểu lòng còn trẻ',img:require('../img/hieu_long_con_tre.png'), shopName:'Minh Long Book'},
        {productName:'Donald Trump Thiên tài lãnh đạo',img:require('../img/trump.png'), shopName:'Minh Long Book'},
        {productName:'Cá nấu lẩu, nấu mì mini...',img:require('../img/ca_nau_lau.png'), shopName:'Devang'},
        {productName:'1KG KHÔ GÀ BƠ TỎI...',img:require('../img/ga_bo_toi.png'), shopName:'LTD Food'},
        {productName:'Xe cần cẩu đa năng',img:require('../img/xa_can_cau.png'), shopName:'Thế giới đồ chơi'},
        {productName:'Đồ chơi dạng mô hình',img:require('../img/do_choi_dang_mo_hinh.png'), shopName:'Thế giới đồ chơi'},
        {productName:'Lãnh dạo giản đơn',img:require('../img/lanh_dao_gian_don.png'), shopName:'Minh Long Book'},
        {productName:'Hiểu lòng còn trẻ',img:require('../img/hieu_long_con_tre.png'), shopName:'Minh Long Book'},
        {productName:'Donald Trump Thiên tài lãnh đạo',img:require('../img/trump.png'), shopName:'Minh Long Book'},
        
    ]
    const Item = ({title})=>(
        <View style = {styles.citemt1}>
            <Image style = {styles.cimgitem1} source={title.img}></Image>
            <View style = {styles.ctxtitem1}>
                <Text style = {styles.ctxtitem11}>{title.productName}</Text>
                <View style = {{flexDirection: 'row'}}>
                <Text style = {{color: 'gray'}}>Shop</Text>
                <Text style = {{color: 'red'}}> {title.shopName}</Text>
                </View>
            </View>
            <TouchableOpacity style = {styles.cbtnchat}>
                <Text style = {styles.ctxtbtnchat}>Chat</Text>
            </TouchableOpacity>
        </View>
    );
  return (
    <View style={styles.container}>
        <View style = {styles.header}>
            <TouchableOpacity style = {styles.hbtn1}>
                <Image style = {styles.himgbtn1} source={require('../img/ant-design_arrow-left-outlined.png')}></Image>
            </TouchableOpacity>
            <Text style = {styles.hTitle}>Chat</Text>
            <TouchableOpacity style = {styles.hbtn2}>
                <Image style = {styles.himgbtn2} source={require('../img/bi_cart-check.png')}></Image>
            </TouchableOpacity>
        </View>
        <View style = {styles.content}>
            <View style = {styles.c1}>
                <Text style = {styles.c1txt}>
                Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
                </Text>
            </View>
            <FlatList
                    data = {data4a}
                    renderItem={({item}) => <Item title={item}/>}
                    scrollEnabled={true}
            />
        </View>
        <View style = {styles.footer}>
            <TouchableOpacity style = {styles.fbtn1}>
                <Image style = {styles.fimgbtn1} source={require('../img/Group10.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.fbtn2}>
                <Image style = {styles.fimgbtn2} source={require('../img/Vector(Stroke).png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.fbtn3}>
                <Image style = {styles.fimgbtn3} source={require('../img/Vector1(Stroke).png')}></Image>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 665,

  },
  header: {
    height: 55,
    width: 390,
    backgroundColor: "#1BA9FF",
    flexDirection: 'row',
    alignItems: 'center',
  },
  hbtn1: {
    width: 80,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  himgbtn1: {
    height: 30,
    width: 30
  },
  hTitle:{
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  hbtn2: {
    width: 80,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  himgbtn2: {
    height: 30,
    width: 30
  },
  content: {
    flex: 1
  },
  c1: {
    height: 70,
    width: 390,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    paddingHorizontal: 50,
    borderBottomWidth: 2,
    borderColor: '#C4C4C4',
  },
  c1txt:{
    fontSize: 16,
  },
  citemt1: {
    flexDirection: 'row',
    width: 390,
    height: 90,
    borderBottomWidth: 2,
    borderColor: '#C4C4C4',
    alignItems: 'center',
  },
  cimgitem1: {
    height: 88,
    width: 88,
    resizeMode: 'contain',
  },
  ctxtitem1: {
    flex: 1,
    paddingLeft: 7,
    top: -20,
  },
  cbtnchat: {
    width: 98,
    height: 45,
    backgroundColor:'#F31111',
    justifyContent: 'center',
    right: 20,
  },
  ctxtbtnchat: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  footer: {
    height: 55,
    width: 390,
    backgroundColor: "#1BA9FF",
    flexDirection: 'row',
    alignItems: 'center',
  },
  fbtn1: {
    width: 80,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fimgbtn1: {
    height: 25,
    width: 25,
  },
  fbtn2: {
    width: 80,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

  },
  fimgbtn2: {
    height: 25,
    width: 25,
  },
  fbtn3: {
    width: 80,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fimgbtn3: {
    height: 25,
    width: 25,
  },
});
