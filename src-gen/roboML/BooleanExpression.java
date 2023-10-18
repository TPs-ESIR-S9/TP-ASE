/**
 */
package roboML;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Boolean Expression</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.BooleanExpression#getElementA <em>Element A</em>}</li>
 *   <li>{@link roboML.BooleanExpression#getElementB <em>Element B</em>}</li>
 *   <li>{@link roboML.BooleanExpression#getBooleanOperator <em>Boolean Operator</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getBooleanExpression()
 * @model
 * @generated
 */
public interface BooleanExpression extends EObject {
	/**
	 * Returns the value of the '<em><b>Element A</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Element A</em>' reference.
	 * @see #setElementA(Entity)
	 * @see roboML.RoboMLPackage#getBooleanExpression_ElementA()
	 * @model required="true"
	 * @generated
	 */
	Entity getElementA();

	/**
	 * Sets the value of the '{@link roboML.BooleanExpression#getElementA <em>Element A</em>}' reference.
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
	 * @see roboML.RoboMLPackage#getBooleanExpression_ElementB()
	 * @model
	 * @generated
	 */
	Entity getElementB();

	/**
	 * Sets the value of the '{@link roboML.BooleanExpression#getElementB <em>Element B</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Element B</em>' reference.
	 * @see #getElementB()
	 * @generated
	 */
	void setElementB(Entity value);

	/**
	 * Returns the value of the '<em><b>Boolean Operator</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.BooleanOperators}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Boolean Operator</em>' attribute.
	 * @see roboML.BooleanOperators
	 * @see #setBooleanOperator(BooleanOperators)
	 * @see roboML.RoboMLPackage#getBooleanExpression_BooleanOperator()
	 * @model
	 * @generated
	 */
	BooleanOperators getBooleanOperator();

	/**
	 * Sets the value of the '{@link roboML.BooleanExpression#getBooleanOperator <em>Boolean Operator</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Boolean Operator</em>' attribute.
	 * @see roboML.BooleanOperators
	 * @see #getBooleanOperator()
	 * @generated
	 */
	void setBooleanOperator(BooleanOperators value);

} // BooleanExpression
