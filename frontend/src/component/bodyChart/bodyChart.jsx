import React, { useState } from 'react';
import './bodyChart.css';
import human from '../../assets/humann.svg';
import Card from '../card/card';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';

const BodyChart = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: null, y: null });

  const [bodyPart, setBodyPart] = useState('1')
  const pd = useSelector((state) => state.data);
  const data = pd.data[1];

  if (data === undefined ) {
    window.location.href = window.location.origin;
    return <Loading />;
  }
  // console.log(pd.data[1]);


  const q = useSelector((state) => state.aiGeneratedForVis);
  const aiGeneratedForVis = q.aiGeneratedForVis[1];
  console.log(q.aiGeneratedForVis[1]);









  // Create an object to store highlighted values for each test name
  const highlightedValuesByTestName = {};

  for (let i = 0; i < data.length; i++) {
    const testName = data[i].test_name;
    const highlightedValues = [];

    for (let j = 0; j < data[i].test_values.length; j++) {
      if (data[i].test_values[j].is_highlighted === true) {
        highlightedValues.push({
          testName: data[i].test_values[j].parameter_name,
          testValue: data[i].test_values[j].parameter_value
        });
      }
    }



    // Store highlighted values for each test name
    if (highlightedValues.length !== 0) highlightedValuesByTestName[testName] = highlightedValues;
  }


  // console.log(highlightedValuesByTestName);

  const handleMouseMove = (event) => {
    const imageRect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - imageRect.left;
    const offsetY = event.clientY - imageRect.top;
    setHoverPosition({ x: offsetX, y: offsetY });
    cordinateCheck()
  };

  console.log(hoverPosition);

  const handleMouseLeave = () => {
    setHoverPosition({ x: null, y: null });
  };

  // Define the boundaries for triggering the hover effect

  const cordinateCheck = () => {
    if (hoverPosition.x > 89 && hoverPosition.x < 100 && hoverPosition.y > 184 && hoverPosition.y < 193) return 1;
    else if (hoverPosition.x > 89 && hoverPosition.x < 100 && hoverPosition.y > 184 && hoverPosition.y < 193) return 1;
    else if (hoverPosition.x > 99 && hoverPosition.x < 113 && hoverPosition.y > 198) return 1;
    else if (hoverPosition.x > 138 && hoverPosition.x < 147 && hoverPosition.y > 198) return 1;
    else if (hoverPosition.x > 109 && hoverPosition.x < 132 && hoverPosition.y > 82) return 1;
    else return 0;

  }

  const arr = [];
  for (let i = 0; i < data?.length; i++) {
    for (let j = 0; j < data[i].test_values.length; j++) {
      if (data[i].test_values[j].is_highlighted) {
        arr.push(data[i].test_values[j]);
      }
    }
  }

  console.log(arr);

  // console.log(bodyPart);

  const isHoveringOverDesiredArea = (testName, index) => {
    let num = 0;
    if (hoverPosition.x > 89 && hoverPosition.x < 100 && hoverPosition.y > 184 && hoverPosition.y < 193 && testName === "Lipid Profile") return <div key={index} className="" style={{ top: hoverPosition.y, left: hoverPosition.x }}> <Card title={testName} highlightedValues={highlightedValuesByTestName[testName]} /> </div>
    if (hoverPosition.x > 89 && hoverPosition.x < 100 && hoverPosition.y > 184 && hoverPosition.y < 193 && testName === "Liver Function Test (LFT)") return <div key={index} className="" style={{ top: hoverPosition.y, left: hoverPosition.x }}> <Card title={testName} highlightedValues={highlightedValuesByTestName[testName]} /> </div>
    else if (hoverPosition.x > 99 && hoverPosition.x < 113 && hoverPosition.y > 198 && hoverPosition.y < 222 && testName === "Kidney Function Test (KFT)") return (<Card title={testName} highlightedValues={highlightedValuesByTestName[testName]} />);
    else if (hoverPosition.x > 138 && hoverPosition.x < 147 && hoverPosition.y > 198 && hoverPosition.y < 222 && testName === "Kidney Function Test (KFT)") return (<Card title={testName} highlightedValues={highlightedValuesByTestName[testName]} />);
    else if (hoverPosition.x > 109 && hoverPosition.x < 132 && hoverPosition.y > 82 && hoverPosition.y < 99 && testName === "Thyroid Profile Total") return (<Card title={testName} highlightedValues={highlightedValuesByTestName[testName]} />);

  };

  return (
    <div className='main-body'>
      <h1 className='heading'>Hover on the Body parts to See the results</h1>
      <div className='container'>
        <div className='left'>
          {Object.keys(highlightedValuesByTestName).slice(0, Math.ceil(Object.keys(highlightedValuesByTestName).length)).map((testName, index) => (
             isHoveringOverDesiredArea(testName, index) 

          ))}
        </div>
        <div className="image-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src="/bodyChart.png" alt="Your Image" style={{ height: "90vh" }} />
        </div>

      </div>
    </div>
  );
};

export default BodyChart;