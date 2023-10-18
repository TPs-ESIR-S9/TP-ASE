/**
 */
package roboML;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Loop</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Loop#getInstruction <em>Instruction</em>}</li>
 *   <li>{@link roboML.Loop#getBooleanexpression <em>Booleanexpression</em>}</li>
 *   <li>{@link roboML.Loop#getVariable <em>Variable</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getLoop()
 * @model
 * @generated
 */
public interface Loop extends Statement {
	/**
	 * Returns the value of the '<em><b>Instruction</b></em>' containment reference list.
	 * The list contents are of type {@link roboML.Statement}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Instruction</em>' containment reference list.
	 * @see roboML.RoboMLPackage#getLoop_Instruction()
	 * @model containment="true"
	 * @generated
	 */
	EList<Statement> getInstruction();

	/**
	 * Returns the value of the '<em><b>Booleanexpression</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Booleanexpression</em>' reference.
	 * @see #setBooleanexpression(BooleanExpression)
	 * @see roboML.RoboMLPackage#getLoop_Booleanexpression()
	 * @model required="true"
	 * @generated
	 */
	BooleanExpression getBooleanexpression();

	/**
	 * Sets the value of the '{@link roboML.Loop#getBooleanexpression <em>Booleanexpression</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Booleanexpression</em>' reference.
	 * @see #getBooleanexpression()
	 * @generated
	 */
	void setBooleanexpression(BooleanExpression value);

	/**
	 * Returns the value of the '<em><b>Variable</b></em>' containment reference list.
	 * The list contents are of type {@link roboML.Variable}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Variable</em>' containment reference list.
	 * @see roboML.RoboMLPackage#getLoop_Variable()
	 * @model containment="true"
	 * @generated
	 */
	EList<Variable> getVariable();

} // Loop
