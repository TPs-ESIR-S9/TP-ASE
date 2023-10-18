/**
 */
package roboML;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Condition</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Condition#getStatementIf <em>Statement If</em>}</li>
 *   <li>{@link roboML.Condition#getStatementElse <em>Statement Else</em>}</li>
 *   <li>{@link roboML.Condition#getBooleanexpression <em>Booleanexpression</em>}</li>
 *   <li>{@link roboML.Condition#getVariable <em>Variable</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getCondition()
 * @model
 * @generated
 */
public interface Condition extends Statement {
	/**
	 * Returns the value of the '<em><b>Statement If</b></em>' containment reference list.
	 * The list contents are of type {@link roboML.Statement}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Statement If</em>' containment reference list.
	 * @see roboML.RoboMLPackage#getCondition_StatementIf()
	 * @model containment="true"
	 * @generated
	 */
	EList<Statement> getStatementIf();

	/**
	 * Returns the value of the '<em><b>Statement Else</b></em>' containment reference list.
	 * The list contents are of type {@link roboML.Statement}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Statement Else</em>' containment reference list.
	 * @see roboML.RoboMLPackage#getCondition_StatementElse()
	 * @model containment="true"
	 * @generated
	 */
	EList<Statement> getStatementElse();

	/**
	 * Returns the value of the '<em><b>Booleanexpression</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Booleanexpression</em>' reference.
	 * @see #setBooleanexpression(BooleanExpression)
	 * @see roboML.RoboMLPackage#getCondition_Booleanexpression()
	 * @model
	 * @generated
	 */
	BooleanExpression getBooleanexpression();

	/**
	 * Sets the value of the '{@link roboML.Condition#getBooleanexpression <em>Booleanexpression</em>}' reference.
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
	 * @see roboML.RoboMLPackage#getCondition_Variable()
	 * @model containment="true"
	 * @generated
	 */
	EList<Variable> getVariable();

} // Condition
