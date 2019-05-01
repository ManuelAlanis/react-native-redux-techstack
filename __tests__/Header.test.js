
import 'react-native';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Header from '../src/components/header';
import {
    View,
    TouchableOpacity, 
    Text,
    StatusBar
} from 'react-native';

const PROGRESS_TEST = 90;

describe('Unit test for header views and functions', () => {
    it('test renders correctly', () => {
        const tree = renderer.create(<Header />);
        expect(tree).toMatchSnapshot();
    });

    it('comprobe increment of progress value over state context', () =>{
        const wrapper = renderer.create(
            <Header />
        );

        const instance = wrapper.getInstance();
        const handleIncreaseProgress = jest.spyOn(instance, 'increaseProgress');
        instance.increaseProgress(PROGRESS_TEST);

        expect(instance.state.progress).toEqual(PROGRESS_TEST);
        expect(handleIncreaseProgress).toHaveBeenCalled();
    });

    it('test addTwoNumbers add numbers correctlty', () => {
        const response = new Header().addTwoNumbers(5,10);
        expect(response).toEqual(5+10);
    });

    it('test addTwoNumbers not return null', () => {
        const response = new Header().addTwoNumbers(5,10);
        expect(response).not.toEqual(null);
    });

    it('test addTwoNumbers not return toBeFalsy', () => {
        const response = new Header().addTwoNumbers(5,10);
        expect(response).not.toBeFalsy();
    });

    // import mockJSON_RESPONSE from '..libraryMock'

    // it('test addTwoNumbers not return Truthy', () => {
    //     const response = await new getTimeService().addTwoNumbers(5,10);

    //     if(response.success) {
    //         expect(response.firstName).not.toEqual('');
    //         expect(response.firstName).not.toEqual('');
    //         expect(response.firstName).not.toEqual('');
    //         expect(response.firstName).not.toEqual('');
    //     }
    // });

    it('test found 1 StatusBar element', () =>{
        const wrapper = renderer.create(<Header />);
        const instance = wrapper.root;
        expect(instance.findAllByType(StatusBar)).toHaveLength(1);
    });
});