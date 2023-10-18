/**
 */
package roboML;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Movement</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Movement#getMovementType <em>Movement Type</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getMovement()
 * @model
 * @generated
 */
public interface Movement extends EObject {
	/**
	 * Returns the value of the '<em><b>Movement Type</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.Direction}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Movement Type</em>' attribute.
	 * @see roboML.Direction
	 * @see #setMovementType(Direction)
	 * @see roboML.RoboMLPackage#getMovement_MovementType()
	 * @model
	 * @generated
	 */
	Direction getMovementType();

	/**
	 * Sets the value of the '{@link roboML.Movement#getMovementType <em>Movement Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Movement Type</em>' attribute.
	 * @see roboML.Direction
	 * @see #getMovementType()
	 * @generated
	 */
	void setMovementType(Direction value);

} // Movement
