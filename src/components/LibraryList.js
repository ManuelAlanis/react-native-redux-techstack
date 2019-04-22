import React from 'react';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { View,
    StyleSheet,
    Animated,
    FlatList,
    Image,
    ScrollView,
    RefreshControl,
    Text
} from 'react-native';
import ListItem from './ListItem'
import Camera from './Camera';

class LibraryList extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            isFlatList: false,
        };
        console.log('tech_stack constructor');
        this.initBinds();
    }

    componentWillMount() {
        console.log('tech_stack componentWillMount');
    }

    initBinds() {
        this.handleOnRefresh = this.handleOnRefresh.bind(this);
    }

    handleOnRefresh() {
        this.setState({
            isFlatList: true
        });
    }
        
    renderItem(library) {
        return <ListItem library={library} />
    }

    render() {
        return(
            <Camera></Camera>
            <View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleOnRefresh}
                        />
                    }
                >
                { 
                    !this.state.isFlatList ? 
                    <View>
                        <View style={{ flex: 1 }}>
                            
                        </View>
                        <View>
                            <LottieView source={require('../animations/empty_box.json')} autoPlay loop />
                            <Text style={styles.emptyList}>
                                You don't have any element on the list
                            </Text> 
                            <Text style={styles.instructionsList}>
                                Just pull to get your list
                            </Text>
                        </View>
                    </View> : null
                }
                {
                    this.state.isFlatList ?
                    <FlatList
                        data={this.props.libraries}
                        renderItem={this.renderItem}
                        keyExtractor={(library) => library.id.toString()}
                    /> : null
                }
                </ScrollView>
            </View>
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