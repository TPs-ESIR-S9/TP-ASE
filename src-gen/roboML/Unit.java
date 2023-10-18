/**
 */
package roboML;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Unit</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.Unit#getType <em>Type</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getUnit()
 * @model
 * @generated
 */
public interface Unit extends EObject {
	/**
	 * Returns the value of the '<em><b>Type</b></em>' attribute.
	 * The literals are from the enumeration {@link roboML.UnitMeasure}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Type</em>' attribute.
	 * @see roboML.UnitMeasure
	 * @see #setType(UnitMeasure)
	 * @see roboML.RoboMLPackage#getUnit_Type()
	 * @model
	 * @generated
	 */
	UnitMeasure getType();

	/**
	 * Sets the value of the '{@link roboML.Unit#getType <em>Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Type</em>' attribute.
	 * @see roboML.UnitMeasure
	 * @see #getType()
	 * @generated
	 */
	void setType(UnitMeasure value);

} // Unit
