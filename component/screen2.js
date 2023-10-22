import { Image, StyleSheet, TextInput, View } from "react-native";
import Product2 from "../item/product2";

function Screen2() {
    return ( 
        <View style={styles.wrapper}>
            <View style={styles.navWrapper}>
            <Image style={styles.backImg} source={require('../img/ant-design_arrow-left-outlined.png')} />
<TextInput style={styles.searchInput} placeholder='Dây cáp usb' />
<Image style={styles.searchImg} source={require('../img/whh_magnifier.png')} />
<Image style={styles.cartImg} source={require('../img/bi_cart-check.png')} />
<Image style={styles.redDot} source={require('../img/Ellipse4.png')} />
<Image style={styles.threeDots} source={require('../img/Group2.png')} />
             </View>
             <View style={styles.productContainer}>
                <View style={styles.productWrapper}>
                    <Product2 pathImg={require('../img/giacchuyen1.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                    <Product2 pathImg={require('../img/giacchuyen1.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                </View>
                <View style={styles.productWrapper}>
                    <Product2 pathImg={require('../img/giacchuyen1.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                    <Product2 pathImg={require('../img/giacchuyen1.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                </View>
                <View style={styles.productWrapper}>
                    <Product2 pathImg={require('../img/giacchuyen1.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                    <Product2 pathImg={require('../img/giacchuyen1.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                </View>
             </View>
             <Image style={styles.navBottom} source={require('../img/navBottom.png')} />
        </View>
     );
}

export default Screen2;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: '#e5e5e5',
    },
    navWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1BA9FF',
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'fixed',
        top: 0,
        zIndex: 1,
        width: '100%',
    },
    backImg: {
        width: 24,
        height: 24,
    },
    searchInput: {
        width: 192,
        height: 30,
        position: 'relative',
        backgroundColor: '#fff',
        paddingLeft: 40,
    },
    searchImg: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 80,
    },
    cartImg: {
        width: 24,
        height: 24,
        position: 'relative',
    },
    redDot: {
        width: 17,
        height: 17,
        position: 'absolute',
        right: 65,
        top: 2,
    },
    threeDots: {
        width: 18,
        height: 5,
    },
    productWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    productContainer: {
        marginTop: 42, 
        marginBottom: 42,
    }, 
    navBottom: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: 42,
    }
})



