import styled from "styled-components";
import { Tabs , TabList , Tab, TabPanel} from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
font-Size: 16px;
width:50%;
`;

export const WrapperTabList = styled(TabList)`
list-style-type : none;
padding:4px;
display:flex;
margin:0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
border-radius : 16px;
border : 1px solid #ccc;
padding : 8px;
user-select : none;
cursor: pointer;

&:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0,0,255, 0.5);
}

&.is-selected {
    border-top-left-radius: 16px ;
    border-top-right-radius: 16px ;
    border-bottom-left-radius: 0px ;
    border-bottom-right-radius: 0px ;
    border-bottom: 1px solid white;
}
`;



export const WrapperTabPanel = styled(TabPanel)`
`;
