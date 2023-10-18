/**
 */
package roboML;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Function Call</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.FunctionCall#getFunction <em>Function</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getFunctionCall()
 * @model
 * @generated
 */
public interface FunctionCall extends Entity {
	/**
	 * Returns the value of the '<em><b>Function</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Function</em>' reference.
	 * @see #setFunction(Function)
	 * @see roboML.RoboMLPackage#getFunctionCall_Function()
	 * @model required="true"
	 * @generated
	 */
	Function getFunction();

	/**
	 * Sets the value of the '{@link roboML.FunctionCall#getFunction <em>Function</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Function</em>' reference.
	 * @see #getFunction()
	 * @generated
	 */
	void setFunction(Function value);

} // FunctionCall
