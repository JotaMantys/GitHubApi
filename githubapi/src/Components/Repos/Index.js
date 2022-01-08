import React from 'react';
import * as style from './styled'

const Repos = () => {
    return (
       <style.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">

           <style.WrapperTabList>
               <style.WrapperTab>REPOS</style.WrapperTab>
               <style.WrapperTab>Stared</style.WrapperTab>
           </style.WrapperTabList>
           
           <style.WrapperTabPanel>REPOS PAINEL</style.WrapperTabPanel>
           <style.WrapperTabPanel>STARED PAINEL</style.WrapperTabPanel>

       </style.WrapperTabs>
    );
}

export default Repos;
