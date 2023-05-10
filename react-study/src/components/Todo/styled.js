import styled from 'styled-components';

import { Button } from '../../components/Button/styled';

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
`;

export const Container = styled.li`
    width: 60vw;
    padding: 15px;
    background: #fff;
    box-shadow: 0 0 5px 2px #ccc;
    list-style: none;
    display: flex;
    justify-content: space-between;
    word-break: break-all;
    margin-bottom: 10px;
    > div { 
        display: flex;
        min-width: 130px;
    }
    > div > ${Button} {
        background-color: #d6d6d6;
        border: none;
        padding: 7px 12px;
        margin: auto;
        cursor: pointer;
        transition: .2s;
        opacity: .6;
        font-size: 15px;
        font-weight: bold;
    }
    > div > ${Button}:nth-child(1) {
        background: yellow;
    }
    > div > ${Button}:nth-child(2) {
        background: #FF0033;
    }
    > div > ${Button}:hover {
        opacity: 1;
    }
`;

export const Title = styled.p`
    font-size: 16px;
`;