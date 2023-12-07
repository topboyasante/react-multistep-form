type FormData = {
  fullName: string;
  email: string;
};

type FirstFormProps = FormData & {
  fullName: string;
  email: string;
  updateFields: (fields: Partial<FormData>) => void;
};

function FirstForm({ ...props }: FirstFormProps) {

  return (
    <>
      <div className="form-container">
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={props.fullName}
            onChange={(e) => props.updateFields({ fullName: e.target.value })}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={props.email}
            onChange={(e) => props.updateFields({ email: e.target.value })}
            required
          />
        </form>
      </div>
    </>
  );
}

export default FirstForm;
