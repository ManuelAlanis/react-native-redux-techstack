import React from 'react';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { View,
    StyleSheet,
    Animated,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
    RefreshControl,
    Text
} from 'react-native';
import ListItem from './ListItem'
import Camera from './Camera';
import Communications from 'react-native-communications';


class LibraryList extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            isFlatList: false,
            isQRDetected: false,
        };
        console.log('tech_stack constructor');
        this.initBinds();
    }

    componentWillMount() {
        console.log('tech_stack componentWillMount');
    }

    initBinds() {
        this.handleOnRefresh = this.handleOnRefresh.bind(this);
        this.callback = this.callback.bind(this);
    }

    handleOnRefresh() {
        this.setState({
            isFlatList: true
        });
    }
        
    renderItem(library) {
        return <ListItem library={library} />
    }

    callback(data) {
        console.log('tech_stack callback data', data);
        this.setState({
            isQRDetected: true
        });
    }

    makeCall() {
        return(
            <View>
                <Text>QR detected</Text>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10
                }} onPress={() => Communications.phonecall('0123456789', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Make phonecall</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return(
            
            <View style={{
                flexDirection: 'row',  
                height: 600
            }}
            >
                {
                    !this.state.isQRDetected ? <Camera callback={this.callback} /> : null 
                }
                {
                    this.state.isQRDetected ? this.makeCall() : null
                }
            </View>
            // <View>
            //     <ScrollView
            //         refreshControl={
            //             <RefreshControl
            //                 refreshing={this.state.refreshing}
            //                 onRefresh={this.handleOnRefresh}
            //             />
            //         }
            //     >
            //     { 
            //         !this.state.isFlatList ? 
            //         <View>
            //             <View style={{ flex: 1 }}>
                            
            //             </View>
            //             <View>
            //                 <LottieView source={require('../animations/empty_box.json')} autoPlay loop />
            //                 <Text style={styles.emptyList}>
            //                     You don't have any element on the list
            //                 </Text> 
            //                 <Text style={styles.instructionsList}>
            //                     Just pull to get your list
            //                 </Text>
            //             </View>
            //         </View> : null
            //     }
            //     {
            //         this.state.isFlatList ?
            //         <FlatList
            //             data={this.props.libraries}
            //             renderItem={this.renderItem}
            //             keyExtractor={(library) => library.id.toString()}
            //         /> : null
            //     }
            //     </ScrollView>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    emptyList: {
        marginTop: 100,
        padding: 45,
        fontSize: 25,
        textAlign: 'center',
        color: 'gray'
    },
    instructionsList:{ 
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
        color: 'gray'
    }
})

const mapStateToProps = state => {
    return { libraries:  state.libraries }
};

export default connect(mapStateToProps)(LibraryList);