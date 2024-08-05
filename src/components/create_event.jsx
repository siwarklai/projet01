import React from 'react';
import './user.css';

export const CreateEvent = () => {
    return (
       
            <div className="form-wrapper">
                <form className="form-container">
                    <h2 className="form-title">Contactez-nous</h2>
                    
                    <div className="form-group">
                        <label htmlFor="type_event">Type d'événement:</label>
                        <select id="type_event" name="type_event">
                            <option value="">Choisir le type de votre événement</option>
                            <option value="option1">Mariage</option>
                            <option value="option2">Événement culturel</option>
                            <option value="option3">Événement sportif</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="text1">lieu d'événementvenement:</label>
                        <input type="text" id="text1" name="text1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="postal_code">Code Postal:</label>
                        <input type="text" id="postal_code" name="postal_code" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" name="date" required />
                    </div>

                    

                    <div className="form-group">
                        <input type="checkbox" id="agree" name="agree" value="yes" />
                        <label htmlFor="agree">Agree to terms</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" name="price" min="0" step="0.01" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min="1" required />
                    </div>

                    <table className="items-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(6)].map((_, index) => (
                                <tr key={index}>
                                    <td><input type="text" name={`item_name_${index}`} /></td>
                                    <td><input type="number" name={`item_quantity_${index}`} min="0" /></td>
                                    <td><input type="number" name={`item_price_${index}`} min="0" step="0.01" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button type="submit" className="submit-button">Envoyer</button>
                </form>
            </div>
       
    );
}
export default CreateEvent;