/**
 */
package roboML;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Deplacement</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Deplacement#getUnit <em>Unit</em>}</li>
 *   <li>{@link roboML.Deplacement#getDeplacementDistance <em>Deplacement Distance</em>}</li>
 *   <li>{@link roboML.Deplacement#getMovementType <em>Movement Type</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getDeplacement()
 * @model
 * @generated
 */
public interface Deplacement extends Statement {
	/**
	 * Returns the value of the '<em><b>Unit</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Unit</em>' reference.
	 * @see #setUnit(Unit)
	 * @see roboML.RoboMLPackage#getDeplacement_Unit()
	 * @model required="true"
	 * @generated
	 */
	Unit getUnit();

	/**
	 * Sets the value of the '{@link roboML.Deplacement#getUnit <em>Unit</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Unit</em>' reference.
	 * @see #getUnit()
	 * @generated
	 */
	void setUnit(Unit value);

	/**
	 * Returns the value of the '<em><b>Deplacement Distance</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Deplacement Distance</em>' reference.
	 * @see #setDeplacementDistance(Entity)
	 * @see roboML.RoboMLPackage#getDeplacement_DeplacementDistance()
	 * @model
	 * @generated
	 */
	Entity getDeplacementDistance();

	/**
	 * Sets the value of the '{@link roboML.Deplacement#getDeplacementDistance <em>Deplacement Distance</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Deplacement Distance</em>' reference.
	 * @see #getDeplacementDistance()
	 * @generated
	 */
	void setDeplacementDistance(Entity value);

	/**
	 * Returns the value of the '<em><b>Movement Type</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.Direction}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Movement Type</em>' attribute.
	 * @see roboML.Direction
	 * @see #setMovementType(Direction)
	 * @see roboML.RoboMLPackage#getDeplacement_MovementType()
	 * @model
	 * @generated
	 */
	Direction getMovementType();

	/**
	 * Sets the value of the '{@link roboML.Deplacement#getMovementType <em>Movement Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Movement Type</em>' attribute.
	 * @see roboML.Direction
	 * @see #getMovementType()
	 * @generated
	 */
	void setMovementType(Direction value);

} // Deplacement
