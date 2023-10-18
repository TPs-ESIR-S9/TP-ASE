/**
 */
package roboML;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Rotation</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Rotation#getRotationAngle <em>Rotation Angle</em>}</li>
 *   <li>{@link roboML.Rotation#getRotationSens <em>Rotation Sens</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getRotation()
 * @model
 * @generated
 */
public interface Rotation extends Statement {
	/**
	 * Returns the value of the '<em><b>Rotation Angle</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rotation Angle</em>' reference.
	 * @see #setRotationAngle(Entity)
	 * @see roboML.RoboMLPackage#getRotation_RotationAngle()
	 * @model required="true"
	 * @generated
	 */
	Entity getRotationAngle();

	/**
	 * Sets the value of the '{@link roboML.Rotation#getRotationAngle <em>Rotation Angle</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rotation Angle</em>' reference.
	 * @see #getRotationAngle()
	 * @generated
	 */
	void setRotationAngle(Entity value);

	/**
	 * Returns the value of the '<em><b>Rotation Sens</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rotation Sens</em>' reference.
	 * @see #setRotationSens(Entity)
	 * @see roboML.RoboMLPackage#getRotation_RotationSens()
	 * @model required="true"
	 * @generated
	 */
	Entity getRotationSens();

	/**
	 * Sets the value of the '{@link roboML.Rotation#getRotationSens <em>Rotation Sens</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rotation Sens</em>' reference.
	 * @see #getRotationSens()
	 * @generated
	 */
	void setRotationSens(Entity value);

} // Rotation
