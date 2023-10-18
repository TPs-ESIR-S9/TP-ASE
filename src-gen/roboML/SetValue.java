/**
 */
package roboML;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Set Value</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.SetValue#getEntityToSet <em>Entity To Set</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getSetValue()
 * @model
 * @generated
 */
public interface SetValue extends Statement {
	/**
	 * Returns the value of the '<em><b>Entity To Set</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Entity To Set</em>' reference.
	 * @see #setEntityToSet(Entity)
	 * @see roboML.RoboMLPackage#getSetValue_EntityToSet()
	 * @model required="true"
	 * @generated
	 */
	Entity getEntityToSet();

	/**
	 * Sets the value of the '{@link roboML.SetValue#getEntityToSet <em>Entity To Set</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Entity To Set</em>' reference.
	 * @see #getEntityToSet()
	 * @generated
	 */
	void setEntityToSet(Entity value);

} // SetValue
