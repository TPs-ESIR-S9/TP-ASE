/**
 */
package roboML;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Assignement</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Assignement#getAssignableVariable <em>Assignable Variable</em>}</li>
 *   <li>{@link roboML.Assignement#getEntity <em>Entity</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getAssignement()
 * @model
 * @generated
 */
public interface Assignement extends Statement {
	/**
	 * Returns the value of the '<em><b>Assignable Variable</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Assignable Variable</em>' reference.
	 * @see #setAssignableVariable(Variable)
	 * @see roboML.RoboMLPackage#getAssignement_AssignableVariable()
	 * @model
	 * @generated
	 */
	Variable getAssignableVariable();

	/**
	 * Sets the value of the '{@link roboML.Assignement#getAssignableVariable <em>Assignable Variable</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Assignable Variable</em>' reference.
	 * @see #getAssignableVariable()
	 * @generated
	 */
	void setAssignableVariable(Variable value);

	/**
	 * Returns the value of the '<em><b>Entity</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Entity</em>' reference.
	 * @see #setEntity(Entity)
	 * @see roboML.RoboMLPackage#getAssignement_Entity()
	 * @model required="true"
	 * @generated
	 */
	Entity getEntity();

	/**
	 * Sets the value of the '{@link roboML.Assignement#getEntity <em>Entity</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Entity</em>' reference.
	 * @see #getEntity()
	 * @generated
	 */
	void setEntity(Entity value);

} // Assignement
