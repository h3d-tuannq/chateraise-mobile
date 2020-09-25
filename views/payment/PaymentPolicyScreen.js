import React, {Component} from 'react'
import {View, Image, Text , StyleSheet, Dimensions, TouchableOpacity} from 'react-native'

const {width,height} = Dimensions.get('window');

import Customer_icon from '../../assets/Customer_Icon.png'
import cart_icon from '../../assets/cart_icon.png'
import payment_icon from '../../assets/payment_icon.png'
import arrow_icon from '../../assets/arrow_icon.png'
import HeaderSimple from "../com/HeaderSimple";

// import define variable
import Def from '../../val/Def'




export default class PaymentPolicyScreen extends Component{
    render(){
        const {container , content,paragraph , simulation, simulationImage} = styles;
        return(
            <View style={container}>
                <HeaderSimple title={Def.PAY_POLIXY_SCREEN_TITLE}/>
                <View style={content}>
                    <View style = {paragraph}>
                        <Text>
                        Nếu không thắng đội khách Liverpool đêm nay trên sân nhà Công viên các hoàng tử, PSG có thể đối diện nguy cơ lớn bị loại. Theo tờ Marca, khi ấy, ông chủ CLB này - tỷ phú Qatar Nasser-Al Khelaifi nhiều khả năng sẽ phải bán Neymar hoặc Kylian Mbappe để thu về một khoản tiền nhằm tránh sự trừng phạt từ UEFA do thâm hụt tài chính vi phạm nghiêm trọng Luật Công bằng tài chính, điều có thể khiến PSG bị loại khỏi cúp châu Âu mùa sau.
                        </Text>
                    </View>
                    <View style = {paragraph}>
                        <Text>
                            Nếu không thắng đội khách Liverpool đêm nay trên sân nhà Công viên các hoàng tử, PSG có thể đối diện nguy cơ lớn bị loại. Theo tờ Marca, khi ấy, ông chủ CLB này - tỷ phú Qatar Nasser-Al Khelaifi nhiều
                        </Text>
                    </View>
                    <View style = {simulation}>
                        <Image source={Customer_icon} style={[simulationImage,{width : 50, height : 50}]}/>
                        <Image source={arrow_icon} style={[simulationImage,{width : 40, height : 26}]}/>
                        <Image source={cart_icon} style={[simulationImage,{width : 58, height : 50}]}/>
                        <Image source={arrow_icon} style={[simulationImage,{width : 40, height : 26}]}/>
                        <Image source={payment_icon} style={[simulationImage,{width : 50, height : 55}]}/>

                    </View>

                    <View style = {paragraph}>
                        <Text>
                            Nếu không thắng đội khách Liverpool đêm nay trên sân nhà Công viên các hoàng tử, PSG có thể đối diện nguy cơ lớn bị loại. Theo tờ Marca, khi ấy, ông chủ CLB này - tỷ phú Qatar Nasser-Al Khelaifi nhiều khả năng sẽ phải bán Neymar hoặc Kylian Mbappe để thu về một khoản tiền nhằm tránh sự trừng phạt từ UEFA do thâm hụt tài chính vi phạm nghiêm trọng Luật Công bằng tài chính, điều có thể khiến PSG bị loại khỏi cúp châu Âu mùa sau.
                        </Text>
                    </View>

                    <View style = {paragraph}>
                        <Text>
                            Nếu không thắng đội khách Liverpool đêm nay trên sân nhà Công viên các hoàng tử, PSG có thể đối diện nguy cơ lớn bị loại. Theo tờ Marca, khi ấy, ông chủ CLB này - tỷ phú Qatar Nasser-Al Khelaifi nhiều khả năng sẽ phải bán Neymar hoặc Kylian Mbappe để thu về một khoản tiền nhằm tránh sự trừng phạt từ UEFA do thâm hụt tài chính vi phạm nghiêm trọng Luật Công bằng tài chính, điều có thể khiến PSG bị loại khỏi cúp châu Âu mùa sau.
                        </Text>
                    </View>


                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d1c36',
        alignItems: 'center',
    },

    content : {
        marginTop : height * 0.02,
        height : height * 0.9 + 50,
        width  : width * 0.95,
        backgroundColor : '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },

    paragraph : {
        paddingHorizontal: 5,
    },
    simulation : {
        marginVertical : 20,
        flexDirection: 'row',
        alignItems : 'center',
    },
    simulationImage : {
        marginHorizontal:5,
    }

});