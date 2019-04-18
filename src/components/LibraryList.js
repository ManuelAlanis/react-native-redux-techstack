import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Animated, FlatList, Image, ScrollView, RefreshControl } from 'react-native';
import ListItem from './ListItem'


class LibraryList extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
        };
        console.log('tech_stack constructor');
    }

    componentWillMount() {
        console.log('tech_stack componentWillMount');
    }

    renderItem(library) {
        return <ListItem library={library} />
    }

    render() {
        console.log('tech_stack render props', this.props);
        return(
            <View>
                <ScrollView
                    refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                    }
                >
                <FlatList
                    data={this.props.libraries}
                    renderItem={this.renderItem}
                    keyExtractor={(library) => library.id.toString()}
                />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { libraries:  state.libraries }
};

export default connect(mapStateToProps)(LibraryList);