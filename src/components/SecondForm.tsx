type FormData = {
  schoolName: string;
  class: string;
};

type SecondFormProps = FormData & {
  schoolName: string;
  class: string;
  updateFields: (fields: Partial<FormData>) => void;
};

function SecondForm({ ...props }: SecondFormProps) {
  return (
    <>
      <div className="form-container">
        <form>
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={props.schoolName}
            onChange={(e) => props.updateFields({ schoolName: e.target.value })}
            required
          />

          <label htmlFor="class">Class:</label>
          <input
            type="text"
            id="class"
            name="class"
            value={props.class}
            onChange={(e) => props.updateFields({ class: e.target.value })}
            required
          />
        </form>
      </div>
    </>
  );
}

export default SecondForm;
