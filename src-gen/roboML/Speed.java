/**
 */
package roboML;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Speed</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Speed#getDeplacementSpeed <em>Deplacement Speed</em>}</li>
 *   <li>{@link roboML.Speed#getSetSpeedValue <em>Set Speed Value</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getSpeed()
 * @model
 * @generated
 */
public interface Speed extends EObject {
	/**
	 * Returns the value of the '<em><b>Deplacement Speed</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.RMLObject}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Deplacement Speed</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #setDeplacementSpeed(RMLObject)
	 * @see roboML.RoboMLPackage#getSpeed_DeplacementSpeed()
	 * @model
	 * @generated
	 */
	RMLObject getDeplacementSpeed();

	/**
	 * Sets the value of the '{@link roboML.Speed#getDeplacementSpeed <em>Deplacement Speed</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Deplacement Speed</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #getDeplacementSpeed()
	 * @generated
	 */
	void setDeplacementSpeed(RMLObject value);

	/**
	 * Returns the value of the '<em><b>Set Speed Value</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Set Speed Value</em>' reference.
	 * @see #setSetSpeedValue(SetValue)
	 * @see roboML.RoboMLPackage#getSpeed_SetSpeedValue()
	 * @model required="true"
	 * @generated
	 */
	SetValue getSetSpeedValue();

	/**
	 * Sets the value of the '{@link roboML.Speed#getSetSpeedValue <em>Set Speed Value</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Set Speed Value</em>' reference.
	 * @see #getSetSpeedValue()
	 * @generated
	 */
	void setSetSpeedValue(SetValue value);

} // Speed
