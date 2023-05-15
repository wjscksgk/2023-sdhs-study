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

    > div > ${Button} {
        border: none;
        padding: 7px 12px;
        margin: auto;
        cursor: pointer;
        transition: .2s;
        font-size: 15px;
        font-weight: bold;
        background: #FF0033;
    }
`;

export const Title = styled.p`
    font-size: 16px;
`;