import React from 'react';
import { SectionList } from 'react-native';
import { Appointment, SectionTitle } from './components/index'
import { Ionicons } from '@expo/vector-icons';

import styled from 'styled-components/native';

const DATA = [
    {
        title: '14 сентября',
        data: [
            {
                time: '15:30',
                active: true,
                diagnosis: 'пульпит',
                user: {
                    fullname: 'Иван Меньшов',
                    avatar:
                        'https://yt3.ggpht.com/-vnxOMFJstew/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcHsBi1xpJUKQUoXrLs4LCqKANl3A/s88-c-k-c0xffffffff-no-rj-mo/photo.jpg'
                }
            },
            {
                time: '18:50',
                diagnosis: 'удаление зуба',
                user: {
                    fullname: 'Андрей Бутырчик',
                    avatar:
                        'data:image/jpeg;base64,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'
                }
            },
        ]
    },
    {
        title: '16 сентября',
        data: [
            {
                time: '11:00',
                diagnosis: 'пульпит',
                user: {
                    fullname: 'Иван Меньшов',
                    avatar:
                        'https://yt3.ggpht.com/-vnxOMFJstew/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcHsBi1xpJUKQUoXrLs4LCqKANl3A/s88-c-k-c0xffffffff-no-rj-mo/photo.jpg'
                }
            },
            {
                time: '18:50',
                diagnosis: 'удаление зуба',
                user: {
                    fullname: 'Андрей Бутырчик',
                    avatar:
                        'data:image/jpeg;base64,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'
                }
            }
        ]
    }
];

export default function App() {
    return (
        <Container>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <Appointment {...item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <SectionTitle>{title}</SectionTitle>
                )}
            />
            <PlusButton>
                <Ionicons name="ios-add" size={32} color="white" />
            </PlusButton>
        </Container>
    );
}

const PlusButton = styled.TouchableOpacity`
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: #2A86FF;
    right: 15px;
    bottom: 25px;

    shadow-color: #2A86FF;
    shadow-opacity: 0.7;
    shadow-radius: 3.5;
    elevation: 5;
`;

const Container = styled.View`
    flex: 1;
    margin-top: 30px;
    padding: 0 20px;
`;