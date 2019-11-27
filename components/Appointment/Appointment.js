import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Group = ({ user, diagnosis, active, time }) => {
    return (
        <GroupItem>
            <Avatar source={{
                uri: user.avatar
            }} />
            <View style={{ flex: 1 }}>
                <FullName>{user.fullname}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
            <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    );
};

Group.defaultProps = {
    title: "Untitled",
    items: []
}

const GroupDate = styled.Text`
    background: ${props => props.active ? '#2A86FF' : '#E9F5FF'};
    color: ${props => props.active ? '#FFFFFF' : '#4294FF'};
    border-radius: 18px;
    font-size: 14px;
    font-weight: 600; 
    width: 70px;
    height: 32px;
    text-align: center;
    line-height: 28px;
`;

const GrayText = styled.Text`
    font-size: 16px;
    line-height: 19px;
    color: #8B979F;
`;

const FullName = styled.Text`
    font-weight: 600;   
    font-size: 16px;
    color: #000000;
`;

const Avatar = styled.Image`
    border-radius: 50px;
    width: 40px;
    height: 40px;
    margin-right: 20px;
`;

const GroupItem = styled.TouchableOpacity`
    padding: 20px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #F3F3F3;
`;

export default Group;