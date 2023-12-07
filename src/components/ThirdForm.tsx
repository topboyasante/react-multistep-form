type FormData = {
  motherName: string;
  fatherName: string;
};

type ThirdFormProps = FormData & {
  fullName: string;
  email: string;
  updateFields: (fields: Partial<FormData>) => void;
};

function ThirdForm({ ...props }: ThirdFormProps) {
  return (
    <div className="form-container">
      <form>
        <label htmlFor="motherName">Mother's Name:</label>
        <input
          type="text"
          id="motherName"
          name="motherName"
          value={props.motherName}
          onChange={(e) => props.updateFields({ motherName: e.target.value })}
          required
        />

        <label htmlFor="fatherName">Father's Name:</label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          value={props.fatherName}
          onChange={(e) => props.updateFields({ fatherName: e.target.value })}
          required
        />
      </form>
    </div>
  );
}

export default ThirdForm;
