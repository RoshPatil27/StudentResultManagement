import { useState } from "react";
import { calculateResult } from "../../services/api";
import {
  HeroSection,
  HeroTitle,
  FormSection,
  Input,
  Button,
  ResultBox,
} from "./Home.styles";

export default function Home() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState([]);
  const [result, setResult] = useState(null);

  const handleSubjectChange = (count) => {
    setMarks(Array(Number(count)).fill(""));
  };

  const handleMarksChange = (index, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = Number(value);
    setMarks(updatedMarks);
  };

  const handleSubmit = async () => {
    const response = await calculateResult({
      name,
      marks,
    });
    setResult(response.data);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>Calculate Student Results Instantly</HeroTitle>
      </HeroSection>

      {/* Form Section */}
      <FormSection>
        <Input
          type="text"
          placeholder="Student Name"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="number"
          min="1"
          placeholder="Number of Subjects"
          onChange={(e) => handleSubjectChange(e.target.value)}
        />

        {marks.map((mark, index) => (
          <Input
            key={index}
            type="number"
            min="0"
            max="100"
            placeholder={`Marks for Subject ${index + 1}`}
            value={mark}
            onChange={(e) => handleMarksChange(index, e.target.value)}
          />
        ))}

        <Button onClick={handleSubmit}>Calculate</Button>

        {result && (
          <ResultBox>
            <p>Total: {result.total}</p>
            <p>Percentage: {result.percentage}%</p>
            <p>Grade: {result.grade}</p>
          </ResultBox>
        )}
      </FormSection>
    </>
  );
}
