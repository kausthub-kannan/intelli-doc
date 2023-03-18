import React from 'react';
import { noteData, dropdownData} from '../data/dummy';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ContextProvider';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Notes = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
 <div className="flex flex-wrap justify-center">



{noteData.map((item) => (
            
        <div key={item.key} className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-gray-400 ">{item.subtitle}</p>
              <p className="mt-8 text-sm text-gray-400">
                {item.content}
              </p>
        </div>
          ))}


      </div>
  );
};

export default Notes;



     {/* <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3"></div> */}