/**
 */
package roboML;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Sensor</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Sensor#getSensorValue <em>Sensor Value</em>}</li>
 *   <li>{@link roboML.Sensor#getGetSensorValue <em>Get Sensor Value</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getSensor()
 * @model abstract="true"
 * @generated
 */
public interface Sensor extends EObject {
	/**
	 * Returns the value of the '<em><b>Sensor Value</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.RMLObject}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sensor Value</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #setSensorValue(RMLObject)
	 * @see roboML.RoboMLPackage#getSensor_SensorValue()
	 * @model
	 * @generated
	 */
	RMLObject getSensorValue();

	/**
	 * Sets the value of the '{@link roboML.Sensor#getSensorValue <em>Sensor Value</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sensor Value</em>' attribute.
	 * @see roboML.RMLObject
	 * @see #getSensorValue()
	 * @generated
	 */
	void setSensorValue(RMLObject value);

	/**
	 * Returns the value of the '<em><b>Get Sensor Value</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Get Sensor Value</em>' reference.
	 * @see #setGetSensorValue(GetValue)
	 * @see roboML.RoboMLPackage#getSensor_GetSensorValue()
	 * @model
	 * @generated
	 */
	GetValue getGetSensorValue();

	/**
	 * Sets the value of the '{@link roboML.Sensor#getGetSensorValue <em>Get Sensor Value</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Get Sensor Value</em>' reference.
	 * @see #getGetSensorValue()
	 * @generated
	 */
	void setGetSensorValue(GetValue value);

} // Sensor
