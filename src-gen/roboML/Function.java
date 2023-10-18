/**
 */
package roboML;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Function</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Function#getInstruction <em>Instruction</em>}</li>
 *   <li>{@link roboML.Function#getNewAttribute <em>New Attribute</em>}</li>
 *   <li>{@link roboML.Function#getReturnType <em>Return Type</em>}</li>
 *   <li>{@link roboML.Function#getVariable <em>Variable</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getFunction()
 * @model
 * @generated
 */
public interface Function extends EObject {
	/**
	 * Returns the value of the '<em><b>Instruction</b></em>' containment reference list.
	 * The list contents are of type {@link roboML.Statement}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Instruction</em>' containment reference list.
	 * @see roboML.RoboMLPackage#getFunction_Instruction()
	 * @model containment="true"
	 * @generated
	 */
	EList<Statement> getInstruction();

	/**
	 * Returns the value of the '<em><b>New Attribute</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.RMLObject}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>New Attribute</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #setNewAttribute(RMLObject)
	 * @see roboML.RoboMLPackage#getFunction_NewAttribute()
	 * @model
	 * @generated
	 */
	RMLObject getNewAttribute();

	/**
	 * Sets the value of the '{@link roboML.Function#getNewAttribute <em>New Attribute</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>New Attribute</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #getNewAttribute()
	 * @generated
	 */
	void setNewAttribute(RMLObject value);

	/**
	 * Returns the value of the '<em><b>Return Type</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.RMLObject}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Return Type</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #setReturnType(RMLObject)
	 * @see roboML.RoboMLPackage#getFunction_ReturnType()
	 * @model
	 * @generated
	 */
	RMLObject getReturnType();

	/**
	 * Sets the value of the '{@link roboML.Function#getReturnType <em>Return Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Return Type</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #getReturnType()
	 * @generated
	 */
	void setReturnType(RMLObject value);

	/**
	 * Returns the value of the '<em><b>Variable</b></em>' containment reference list.
	 * The list contents are of type {@link roboML.Variable}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Variable</em>' containment reference list.
	 * @see roboML.RoboMLPackage#getFunction_Variable()
	 * @model containment="true"
	 * @generated
	 */
	EList<Variable> getVariable();

} // Function
