
import { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        // Clear the old success message when editing
        setSuccess(false);

        // Update validation feedback as the user types
        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: name === "name"
                ? (value.trim() ? "" : "Name is required")
                : (!value.trim()
                    ? "Email is required"
                    : (!/\S+@\S+\.\S+/.test(value)
                        ? "Email is invalid"
                        : ""))
        }));
    }

    function validate() {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        return newErrors;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSuccess(true);
        } else {
            setSuccess(false);
        }
    }

    return (
        <div className="registration-card">
            <h1>User Registration</h1>
            <p className="subtitle">
                Fill in your details to register.
            </p>

            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                    />

                    {errors.name && (
                        <p className="error">{errors.name}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                    />

                    {errors.email && (
                        <p className="error">{errors.email}</p>
                    )}
                </div>

                <button type="submit">Register</button>

                {success && (
                    <p className="success" role="status">
                        Form submitted successfully!
                    </p>
                )}
            </form>
        </div>
    );
}

export default RegistrationForm;
