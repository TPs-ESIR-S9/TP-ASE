/**
 */
package roboML;

import org.eclipse.emf.common.util.EList;
import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Variable</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Variable#getVariableName <em>Variable Name</em>}</li>
 *   <li>{@link roboML.Variable#getVariableValue <em>Variable Value</em>}</li>
 *   <li>{@link roboML.Variable#getVariableref <em>Variableref</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getVariable()
 * @model
 * @generated
 */
public interface Variable extends EObject {
	/**
	 * Returns the value of the '<em><b>Variable Name</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.RMLObject}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Variable Name</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #setVariableName(RMLObject)
	 * @see roboML.RoboMLPackage#getVariable_VariableName()
	 * @model
	 * @generated
	 */
	RMLObject getVariableName();

	/**
	 * Sets the value of the '{@link roboML.Variable#getVariableName <em>Variable Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Variable Name</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #getVariableName()
	 * @generated
	 */
	void setVariableName(RMLObject value);

	/**
	 * Returns the value of the '<em><b>Variable Value</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.RMLObject}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Variable Value</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #setVariableValue(RMLObject)
	 * @see roboML.RoboMLPackage#getVariable_VariableValue()
	 * @model
	 * @generated
	 */
	RMLObject getVariableValue();

	/**
	 * Sets the value of the '{@link roboML.Variable#getVariableValue <em>Variable Value</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Variable Value</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #getVariableValue()
	 * @generated
	 */
	void setVariableValue(RMLObject value);

	/**
	 * Returns the value of the '<em><b>Variableref</b></em>' containment reference list.
	 * The list contents are of type {@link roboML.VariableRef}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Variableref</em>' containment reference list.
	 * @see roboML.RoboMLPackage#getVariable_Variableref()
	 * @model containment="true"
	 * @generated
	 */
	EList<VariableRef> getVariableref();

} // Variable
