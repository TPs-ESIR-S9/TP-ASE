/**
 */
package roboML;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Arithmetic Expression</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.ArithmeticExpression#getVariable <em>Variable</em>}</li>
 *   <li>{@link roboML.ArithmeticExpression#getElementA <em>Element A</em>}</li>
 *   <li>{@link roboML.ArithmeticExpression#getElementB <em>Element B</em>}</li>
 *   <li>{@link roboML.ArithmeticExpression#getArithmeticOperator <em>Arithmetic Operator</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getArithmeticExpression()
 * @model
 * @generated
 */
public interface ArithmeticExpression extends Entity {
	/**
	 * Returns the value of the '<em><b>Variable</b></em>' containment reference list.
	 * The list contents are of type {@link roboML.Variable}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Variable</em>' containment reference list.
	 * @see roboML.RoboMLPackage#getArithmeticExpression_Variable()
	 * @model containment="true"
	 * @generated
	 */
	EList<Variable> getVariable();

	/**
	 * Returns the value of the '<em><b>Element A</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Element A</em>' reference.
	 * @see #setElementA(Entity)
	 * @see roboML.RoboMLPackage#getArithmeticExpression_ElementA()
	 * @model required="true"
	 * @generated
	 */
	Entity getElementA();

	/**
	 * Sets the value of the '{@link roboML.ArithmeticExpression#getElementA <em>Element A</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Element A</em>' reference.
	 * @see #getElementA()
	 * @generated
	 */
	void setElementA(Entity value);

	/**
	 * Returns the value of the '<em><b>Element B</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Element B</em>' reference.
	 * @see #setElementB(Entity)
	 * @see roboML.RoboMLPackage#getArithmeticExpression_ElementB()
	 * @model
	 * @generated
	 */
	Entity getElementB();

	/**
	 * Sets the value of the '{@link roboML.ArithmeticExpression#getElementB <em>Element B</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Element B</em>' reference.
	 * @see #getElementB()
	 * @generated
	 */
	void setElementB(Entity value);

	/**
	 * Returns the value of the '<em><b>Arithmetic Operator</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.ArithmeticOperators}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Arithmetic Operator</em>' attribute.
	 * @see roboML.ArithmeticOperators
	 * @see #setArithmeticOperator(ArithmeticOperators)
	 * @see roboML.RoboMLPackage#getArithmeticExpression_ArithmeticOperator()
	 * @model
	 * @generated
	 */
	ArithmeticOperators getArithmeticOperator();

	/**
	 * Sets the value of the '{@link roboML.ArithmeticExpression#getArithmeticOperator <em>Arithmetic Operator</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Arithmetic Operator</em>' attribute.
	 * @see roboML.ArithmeticOperators
	 * @see #getArithmeticOperator()
	 * @generated
	 */
	void setArithmeticOperator(ArithmeticOperators value);

} // ArithmeticExpression
